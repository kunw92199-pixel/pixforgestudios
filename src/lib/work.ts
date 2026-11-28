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
