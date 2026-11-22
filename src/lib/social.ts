export interface SocialLink {
  id: string;
  name: string;
  url: string;
  /** Inline SVG path data for a simple, brand-recognizable monochrome glyph. */
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "fiverr",
    name: "Fiverr",
    url: "https://www.fiverr.com/kunwang821",
    icon: "M10 3a7 7 0 1 0 7 7l-1.5-1-.5 3H13l-.3-1.7A5.5 5.5 0 1 1 10 3.7V5.4L8.5 4.8 9.3 3z",
  },
  {
    id: "tiktok",
    name: "TikTok",
    url: "https://tiktok.com/@kunwang24",
    icon: "M16.5 3c.3 2.1 1.7 3.6 3.8 3.9v2.9c-1.4.1-2.7-.3-3.8-1.1v5.6c0 3.2-2.2 5.4-5.2 5.4A5.2 5.2 0 0 1 6 14.4c0-3 2.4-5.2 5.6-5v3a2.2 2.2 0 0 0-2.2 2.2c0 1.3 1 2.2 2.3 2.2 1.4 0 2.4-1 2.4-2.6V3h2.4z",
  },
  {
    id: "youtube",
    name: "YouTube",
    url: "https://youtube.com/@PixelAIVideos",
    icon: "M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8A26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3L10 15z",
  },
];
