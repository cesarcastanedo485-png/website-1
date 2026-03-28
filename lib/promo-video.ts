/**
 * Default NWI Fun Ball promo (Facebook Reel) — was embedded in IntroSection before Option 1 restore.
 * NEXT_PUBLIC_PROMO_VIDEO_URL overrides when set (full plugin URL, reel/watch URL, YouTube, or .mp4).
 */
export const DEFAULT_FACEBOOK_REEL_URL =
  "https://www.facebook.com/reel/1630445864933957";

export function facebookPluginEmbedUrl(pageUrl: string) {
  return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
    pageUrl
  )}&show_text=false&width=500&height=888`;
}
