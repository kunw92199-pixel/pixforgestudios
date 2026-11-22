export type WorkCategory =
  | "product-ads"
  | "dubbing"
  | "short-clips"
  | "ai-video";

export interface WorkItem {
  slug: string;
  category: WorkCategory;
  title: {
    en: string;
    zh: string;
  };
  desc: {
    en: string;
    zh: string;
  };
  media: {
    type: "image" | "video";
    src: string;
    poster?: string;
  };
}

export const workItems: WorkItem[] = [
  // —— AI 产品视频广告 ——
  {
    slug: "fashion-model",
    category: "product-ads",
    title: { en: "Fashion Model | AI Video Ad", zh: "时尚模特 | AI 视频广告" },
    desc: { en: "Editorial fashion ad generated with AI.", zh: "AI 生成的时尚杂志风广告。" },
    media: { type: "video", src: "/work/fashion-model.mp4", poster: "/work/fashion-model-poster.webp" },
  },
  {
    slug: "fashion-streetwear",
    category: "product-ads",
    title: { en: "AI Fashion Ad | Streetwear Campaign", zh: "AI 时尚广告 | 街头潮牌" },
    desc: { en: "Streetwear campaign visual.", zh: "街头潮牌系列视觉。" },
    media: { type: "image", src: "/work/fashion-streetwear.webp" },
  },
  {
    slug: "skincare",
    category: "product-ads",
    title: { en: "Skincare Product Visual", zh: "护肤产品视觉" },
    desc: { en: "Premium skincare product shot.", zh: "高端护肤产品图。" },
    media: { type: "image", src: "/work/skincare-product.webp" },
  },
  {
    slug: "tech-headphones",
    category: "product-ads",
    title: { en: "Technology Product Campaign", zh: "科技产品广告" },
    desc: { en: "Headphones product campaign.", zh: "耳机产品广告。" },
    media: { type: "image", src: "/work/tech-headphones.webp" },
  },
  {
    slug: "coffee",
    category: "product-ads",
    title: { en: "Product Advertising | Coffee", zh: "产品广告 | 咖啡" },
    desc: { en: "Coffee product advertising visual.", zh: "咖啡产品广告视觉。" },
    media: { type: "image", src: "/work/coffee-product.webp" },
  },
  {
    slug: "lifestyle",
    category: "product-ads",
    title: { en: "Lifestyle Campaign | Everyday Premium", zh: "生活方式广告 | 日常精品" },
    desc: { en: "Lifestyle campaign for premium goods.", zh: "精品生活方式广告。" },
    media: { type: "image", src: "/work/campaign-lifestyle.webp" },
  },
  {
    slug: "forest-cinematic",
    category: "product-ads",
    title: { en: "Cinematic Nature & Fashion Film", zh: "电影感自然与时尚片" },
    desc: { en: "Cinematic nature and fashion film.", zh: "电影感自然与时尚短片。" },
    media: { type: "video", src: "/work/forest-cinematic.mp4", poster: "/work/forest-poster.webp" },
  },
  // —— 多语种配音 ——
  {
    slug: "dubbing-demo",
    category: "dubbing",
    title: { en: "13-Language Dubbing Reel", zh: "13 语种配音合集" },
    desc: { en: "One video, thirteen languages — same voice.", zh: "一条视频，十三个语种——同一个声音。" },
    media: { type: "video", src: "/work/dubbing/00-多语种演示合集片.mp4" },
  },
  // —— 短视频切片 ——
  {
    slug: "vertical-clip",
    category: "short-clips",
    title: { en: "Vertical Short — English Version", zh: "竖屏切片 — 英语版" },
    desc: { en: "Platform-ready vertical clip, captioned and batch-edited.", zh: "可直接发布的竖屏切片，带字幕、批量剪辑。" },
    media: { type: "video", src: "/work/dubbing/02-英语版.mp4" },
  },
  // —— AI 视频 / 口型 ——
  {
    slug: "cinematic-character",
    category: "ai-video",
    title: { en: "Cinematic Character Concept", zh: "电影感角色概念" },
    desc: { en: "AI-generated cinematic character.", zh: "AI 生成的电影感角色。" },
    media: { type: "image", src: "/work/cinematic-character.webp" },
  },
  {
    slug: "fantasy-character",
    category: "ai-video",
    title: { en: "Fantasy Character Visual", zh: "奇幻角色视觉" },
    desc: { en: "Fantasy character concept art.", zh: "奇幻角色概念图。" },
    media: { type: "image", src: "/work/fantasy-character.webp" },
  },
  {
    slug: "brand-intro",
    category: "ai-video",
    title: { en: "Pixel Forge | Brand Introduction", zh: "Pixel Forge | 品牌介绍" },
    desc: { en: "Studio brand introduction film.", zh: "工作室品牌介绍片。" },
    media: { type: "video", src: "/work/brand-intro.mp4", poster: "/work/brand-intro-poster.webp" },
  },
  {
    slug: "capabilities",
    category: "ai-video",
    title: { en: "Creative Production Capabilities", zh: "创意制作能力" },
    desc: { en: "Studio capabilities showcase.", zh: "工作室能力展示。" },
    media: { type: "video", src: "/work/studio-capabilities.mp4", poster: "/work/studio-capabilities-poster.webp" },
  },
];

export const categoryMeta: Record<
  WorkCategory,
  { en: string; zh: string }
> = {
  "product-ads": { en: "AI Product Ads", zh: "AI 产品广告" },
  dubbing: { en: "Multilingual Dubbing", zh: "多语种配音" },
  "short-clips": { en: "Short-form Clips", zh: "短视频切片" },
  "ai-video": { en: "AI Video & Lipsync", zh: "AI 视频 & 口型" },
};
