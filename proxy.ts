import { RateLimiterRedis } from 'rate-limiter-flexible';
import Redis from 'ioredis';
import { NextResponse } from 'next/server';

const redisClient = new Redis(process.env.REDIS_URL!);

// Initialisation du rate limiter
const rateLimiter = new RateLimiterRedis({
    storeClient: redisClient,
    keyPrefix: 'rlflx',
    points: 5,           // 5 requêtes par 10 secondes
    duration: 10,        // par 10 secondes
    blockDuration: 60,   // blocage 1 min si dépasse
});

const botUserAgents = [
    /Googlebot/i,
    /Bingbot/i,
    /Slurp/i,
    /DuckDuckBot/i,
    /Baiduspider/i,
];

export default async function proxy(req: Request) {
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || '0.0.0.0';
    const userAgent = req.headers.get('user-agent') || '';
    
    // Identifie si la requête provient d'un bot
    const isBot = botUserAgents.some((regex) => regex.test(userAgent));

    // Si ce n'est pas un bot, applique le rate limit
    if (!isBot) {
        try {
        await rateLimiter.consume(ip); // Consomme un point, renvoie une erreur si dépassé
        } catch (rejRes) {
        console.warn('Rate limit atteint pour', ip);
        return new Response('Trop de requêtes, essayez plus tard.', { status: 429 });
        }
    }

    // Redirige ou passe la requête au reste du processus
    return NextResponse.next();
}
