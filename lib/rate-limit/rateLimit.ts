import Redis from "ioredis";
import { RateLimiterRedis } from "rate-limiter-flexible";

const redisClient = new Redis(process.env.REDIS_URL!);

// Initialisation du rate limiter
export const rateLimiter = new RateLimiterRedis({
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