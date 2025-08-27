export const MAX_VIDEO_SIZE = 500 * 1024 * 1024;
export const MAX_THUMBNAIL_SIZE = 10 * 1024 * 1024;

export const BUNNY = {
  STREAM_BASE_URL: "https://video.bunnycdn.com/library",
  STORAGE_BASE_URL: "https://sg.storage.bunnycdn.com/snapcast",
  CDN_URL: "https://snapcast.b-cdn.net",
  EMBED_URL: "https://iframe.mediadelivery.net/embed",
  TRANSCRIPT_URL: "https://vz-47a08e64-84d.b-cdn.net",
};

export const emojis = ["😂", "😍", "👍"];

export const filterOptions = [
  "Most Viewed",
  "Most Recent",
  "Oldest First",
  "Least Viewed",
];

export const visibilities: Visibility[] = ["public", "private"];

export const ICONS = {
  record: "/assets/icons/record.svg",
  close: "/assets/icons/close.svg",
  upload: "/assets/icons/upload.svg",
};

export const initialVideoState = {
  isLoaded: false,
  hasIncrementedView: false,
  isProcessing: true,
  processingProgress: 0,
};

export const infos = ["transcript", "metadata"];

export const DEFAULT_VIDEO_CONFIG = {
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  frameRate: { ideal: 30 },
};

export const DEFAULT_RECORDING_CONFIG = {
  mimeType: "video/webm;codecs=vp9,opus",
  audioBitsPerSecond: 128000,
  videoBitsPerSecond: 2500000,
};

// TEST
export const dummyCards = [
  {
    id: "1",
    title: "誕生日おめでとう！🍰",
    thumbnail: "/assets/samples/thumbnail (1).png",
    userImg: "/assets/images/jason.png",
    username: "えにゃん",
    createdAt: new Date("2025-08-27"),
    views: 10,
    visibility: "public",
    duration: 250
  },
  {
    id: "2",
    title: "旅行の思い出🌏",
    thumbnail: "/assets/samples/thumbnail (2).png",
    userImg: "/assets/images/sarah.png",
    username: "サラ",
    createdAt: new Date("2025-07-15"),
    views: 25,
    visibility: "private",
    duration: 180
  },
  {
    id: "3",
    title: "猫の動画🐱",
    thumbnail: "/assets/samples/thumbnail (3).png",
    userImg: "/assets/images/ken.png",
    username: "ケン",
    createdAt: new Date("2025-06-10"),
    views: 40,
    visibility: "public",
    duration: 120
  },
  {
    id: "4",
    title: "料理チャレンジ🍳",
    thumbnail: "/assets/samples/thumbnail (4).png",
    userImg: "/assets/images/mei.png",
    username: "メイ",
    createdAt: new Date("2025-05-01"),
    views: 15,
    visibility: "private",
    duration: 300
  },
  {
    id: "5",
    title: "友達とゲーム🎮",
    thumbnail: "/assets/samples/thumbnail (5).png",
    userImg: "/assets/images/tom.png",
    username: "トム",
    createdAt: new Date("2025-04-20"),
    views: 50,
    visibility: "public",
    duration: 210
  },
];