// "use server";

// import { headers } from "next/headers";
// import crypto from "crypto";
// import { rateLimiter } from "@/lib/rate-limit/rateLimit";
// import { prisma } from "@/lib/prisma/prisma";


// export async function logVisit(path: string, userAgent?: string) {
//     try {
//         const h = await headers();
//         const ipRaw =
//         h.get("x-forwarded-for") ??
//         h.get("x-real-ip") ??
//         "0.0.0.0";

//         // Hash de l'IP pour anonymisation
//         const ipHash = crypto.createHash("sha256").update(ipRaw).digest("hex");

//         // Création du visitorId
//         const visitorId = crypto
//         .createHash("sha256")
//         .update(ipHash + (userAgent ?? ""))
//         .digest("hex");

        
//         try {
//             await rateLimiter.consume(visitorId); // Throws si dépasse le quota
//         } catch (rejRes) {
//             console.warn("Rate limit atteint pour", ipRaw);
//             return; // on ignore la requête si trop de hits
//         }

//         // Appel API géoloc
//         const geoData = await fetch(`https://ipwho.is/${ipRaw}`).then(r => r.json());

//         const country = geoData?.country ?? null;
//         const city = geoData?.city ?? null;

//         // Vérifie si visiteur déjà logué
//         const existing = await prisma.visitLog.findFirst({
//         where: { visitorId },
//         });

//         if (!existing) {
//             // Nouveau visiteur
//             await prisma.visitLog.create({
//                 data: {
//                 visitorId,
//                 userAgent,
//                 pages: [path],
//                 country,
//                 city,
//                 },
//             });
//         } else {
//             // Mise à jour des pages visitées
//             const pages = (existing.pages as string[]) ?? [];
//             if (!pages.includes(path)) {
//                 await prisma.visitLog.update({
//                 where: { id: existing.id },
//                 data: { pages: [...pages, path] },
//                 });
//             }
//         }
//     } catch (err) {
//         console.error("Erreur logVisit:", err);
//     }
// }
