"use server"

export async function getTikTokThumbnail(url: string) {
  const res = await fetch(
    `https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`,
    { cache: "force-cache" } 
  );

  const data = await res.json();
  return data.thumbnail_url;
}
