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
  {
    slug: "biz-promo-12lang",
    category: "dubbing",
    title: { en: "Business Promo — 12 Languages", zh: "业务宣传片 — 12 语种" },
    desc: { en: "Corporate promo localized into 12 languages with native dubbing & subtitles.", zh: "企业宣传片本地化 12 语种，原生配音 + 字幕。" },
    media: { type: "video", src: "/work/dubbing/biz-promo-12lang_web.mp4" },
  },
  // —— 短剧二创切片 ——
  {
    slug: "rink-ep01-viral",
    category: "short-clips",
    title: { en: "Short Drama Re-edit — Viral Cut", zh: "短剧二创切片 — 爆款版" },
    desc: { en: "Hook-first re-edit of a short drama episode, built for high retention.", zh: "短剧分集二创，钩子前置，为高完播率优化。" },
    media: { type: "video", src: "/work/shortclips/rink-ep01-viral_web.mp4" },
  },
  {
    slug: "rink-ep01-cps",
    category: "short-clips",
    title: { en: "Short Drama Clip — CPS Funnel", zh: "短剧切片 — CPS 引流挂链接" },
    desc: { en: "Vertical clip with attribution link, cut for drama-platform CPA.", zh: "带归因链接的竖屏切片，针对短剧平台 CPA 优化。" },
    media: { type: "video", src: "/work/shortclips/rink-ep01-cps_web.mp4" },
  },
  {
    slug: "babysitter-ep21",
    category: "short-clips",
    title: { en: "Short Drama Re-edit — Babysitter", zh: "短剧二创 — Babysitter" },
    desc: { en: "Multi-series drama re-edit, consistent hook + EP structure.", zh: "多剧二创，统一钩子 + 分集结构。" },
    media: { type: "video", src: "/work/shortclips/babysitter-ep21_web.mp4" },
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
  {
    slug: "lipsync-demo",
    category: "ai-video",
    title: { en: "Lip-sync Redubbing Demo", zh: "口型重绘演示" },
    desc: { en: "AI lip-sync: voice cloned & re-animated to match the original speaker.", zh: "AI 口型重绘：克隆音色并按原说话人重新对口型。" },
    media: { type: "video", src: "/work/ai-video/lipsync-demo_web.mp4" },
  },
  {
    slug: "digital-human-en",
    category: "ai-video",
    title: { en: "Digital Human — English Lip-sync", zh: "数字人 — 英文对口型" },
    desc: { en: "Digital human presenter with English lip-sync.", zh: "数字人播报，英文对口型。" },
    media: { type: "video", src: "/work/ai-video/digital-human-en_web.mp4" },
  },
];

export const categoryMeta: Record<
  WorkCategory,
  { en: string; zh: string }
> = {
  "product-ads": { en: "AI Product Ads", zh: "AI 产品广告" },
  dubbing: { en: "Multilingual Dubbing", zh: "多语种配音" },
  "short-clips": { en: "Short Drama Re-edits", zh: "短剧二创切片" },
  "ai-video": { en: "AI Video & Lipsync", zh: "AI 视频 & 口型" },
};
