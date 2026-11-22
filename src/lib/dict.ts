import type { Locale } from "./i18n";

export interface Dict {
  nav: {
    about: string;
    services: string;
    work: string;
    process: string;
    contact: string;
    cta: string;
  };hero: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    points: string[];
  };
  services: {
    title: string;
    subtitle: string;
    items: { title: string; desc: string; tags: string[] }[];
  };
  work: {
    title: string;
    subtitle: string;
    note: string;
  };
  process: {
    title: string;
    steps: { title: string; desc: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    cta: string;
    fiverr: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
}

export const en: Dict = {
  nav: {
    about: "About",
    services: "Services",
    work: "Work",
    process: "Process",
    contact: "Contact",
    cta: "Start a Project",
  },
  hero: {
    badge: "Video & AI Content Studio",
    title1: "We forge pixels",
    title2: "into stories",
    subtitle:
      "PixForge Studios turns your content into global-ready video — multilingual dubbing, short-form edits, and AI-powered lipsync. One studio, every language.",
    ctaPrimary: "View Our Work",
    ctaSecondary: "Get a Quote",
    stats: [
      { value: "13", label: "Languages" },
      { value: "300+", label: "Files Delivered" },
      { value: "4", label: "Core Services" },
    ],
  },
  about: {
    title: "About the Studio",
    p1: "PixForge Studios is a digital content studio focused on one thing: helping creators and brands reach audiences beyond their own language.",
    p2: "We combine video production with AI workflows to deliver fast, affordable, broadcast-quality results — without the overhead of a traditional agency.",
    points: [
      "Multilingual-first: 13 languages out of the box",
      "AI-assisted, human-QA'd on every delivery",
      "Fast turnaround, transparent pricing",
    ],
  },
  services: {
    title: "What We Do",
    subtitle: "Four core services, engineered for global reach.",
    items: [
      {
        title: "AI Product Video Ads",
        desc: "Turn product photos into scroll-stopping video ads. AI-assisted short-form ads for fashion and ecommerce brands — model shoots, campaign visuals, and motion.",
        tags: ["Fashion & ecommerce", "AI ads", "Model & product"],
      },
      {
        title: "Multilingual Dubbing",
        desc: "Turn one video into 13 language versions. We translate, voice, and sync subtitles while keeping your original tone intact — no reshoots, no translator, no voice actor needed.",
        tags: ["13 languages", "Voice clone", "Dual subtitles"],
      },
      {
        title: "Short-form Video Editing",
        desc: "Repurpose long content into scroll-stopping vertical clips. Hook-first cuts, dynamic captions, and platform-native formatting for TikTok, Reels, and Shorts.",
        tags: ["Vertical 1080x1920", "Captions", "Batch edits"],
      },
      {
        title: "AI Video & Lipsync",
        desc: "Digital humans, face lipsync, and motion — we match mouth to voice and drop in clean footage for demos, ads, and explainers.",
        tags: ["Lipsync", "Digital human", "4K source"],
      },
    ],
  },
  work: {
    title: "Selected Work",
    subtitle: "A few samples. Full portfolio available on request.",
    note: "Demo clips & sample reels coming online shortly.",
  },
  process: {
    title: "How We Work",
    steps: [
      { title: "Brief", desc: "You share the source video and target languages." },
      { title: "Forge", desc: "We translate, voice, edit, and sync everything." },
      { title: "Review", desc: "You check, we refine — human QA on every pass." },
      { title: "Deliver", desc: "Final files in every format you need." },
    ],
  },
  contact: {
    title: "Let's Build Something",
    subtitle: "Tell us about your project and we'll get back within 24 hours.",
    cta: "Message Us",
    fiverr: "Or hire us on Fiverr",
  },
  footer: {
    tagline: "Pixels forged into stories.",
    rights: "All rights reserved.",
  },
};

export const zh: Dict = {
  nav: {
    about: "关于",
    services: "服务",
    work: "作品",
    process: "流程",
    contact: "联系",
    cta: "开始一个项目",
  },
  hero: {
    badge: "视频 & AI 内容工作室",
    title1: "我们把像素",
    title2: "锻造成故事",
    subtitle:
      "PixForge Studios 把你的内容变成全球可用的视频——多语种配音、短视频二创、AI 口型重绘。一个工作室，覆盖每一种语言。",
    ctaPrimary: "查看作品",
    ctaSecondary: "获取报价",
    stats: [
      { value: "13", label: "语种" },
      { value: "300+", label: "已交付文件" },
      { value: "4", label: "核心服务" },
    ],
  },
  about: {
    title: "关于工作室",
    p1: "PixForge Studios 是一家数字内容工作室，专注一件事：帮创作者和品牌把内容带到自己语言之外的受众面前。",
    p2: "我们把视频制作与 AI 工作流结合，交付快速、实惠、接近广播级的结果——没有传统广告公司的重资产。",
    points: [
      "多语种优先：开箱即用 13 种语言",
      "AI 辅助 + 人工质检，每一个交付都把关",
      "交付快、价格透明",
    ],
  },
  services: {
    title: "我们做什么",
    subtitle: "四大核心服务，为全球触达而生。",
    items: [
      {
        title: "AI 产品视频广告",
        desc: "把产品照片变成让人停下滑动的视频广告。AI 辅助的短视频广告，服务时尚与电商品牌——模特拍摄、营销视觉、动态包装。",
        tags: ["时尚 & 电商", "AI 广告", "模特 & 产品"],
      },
      {
        title: "多语种配音",
        desc: "一条视频变 13 个语种版本。我们负责翻译、配音、同步字幕，同时保留你原本的语气——不用重拍、不用请翻译、不用找配音。",
        tags: ["13 语种", "声音克隆", "双语字幕"],
      },
      {
        title: "短视频二创剪辑",
        desc: "把长内容重做成让人停下滑动的竖屏切片。钩子前置、动态字幕、平台原生格式，适配 TikTok、Reels、Shorts。",
        tags: ["竖屏 1080x1920", "字幕", "批量剪辑"],
      },
      {
        title: "AI 视频 & 口型重绘",
        desc: "数字人、对口型、动态生成——我们把嘴型和声音对齐，输出干净素材，用于 demo、广告和讲解视频。",
        tags: ["口型重绘", "数字人", "4K 源片"],
      },
    ],
  },
  work: {
    title: "精选作品",
    subtitle: "部分样片，完整作品集可联系我们索取。",
    note: "Demo 样片 & 案例集即将上线。",
  },
  process: {
    title: "我们的流程",
    steps: [
      { title: "需求", desc: "你提供源视频和目标语种。" },
      { title: "锻造", desc: "我们完成翻译、配音、剪辑、同步。" },
      { title: "复核", desc: "你检查，我们打磨——每一步都人工质检。" },
      { title: "交付", desc: "输出你需要的所有格式成品。" },
    ],
  },
  contact: {
    title: "一起做点东西",
    subtitle: "告诉我们你的项目，我们 24 小时内回复。",
    cta: "联系我们",
    fiverr: "或直接在 Fiverr 下单",
  },
  footer: {
    tagline: "像素，锻造成故事。",
    rights: "版权所有。",
  },
};

export function getDict(locale: Locale): Dict {
  return locale === "zh" ? zh : en;
}
