import type { ThemeConfig, DateConfig } from "../types/general";

export const theme: ThemeConfig = [
  {
    name: "synthwave",
    text: "🌃 Synthwave",
  },
  {
    name: "night",
    text: "🌃 Night",
  },
  {
    name: "lofi",
    text: "🎶 Lo-Fi",
  },
  {
    name: "christmas",
    text: "🎄 Christmas",
  },
  {
    name: "black",
    text: "🖤 Black",
  },
  {
    name: "dark",
    text: "🌑 Dark",
  },
  {
    name: "halloween",
    text: "🎃 Halloween",
  },
  {
    name: "dracula",
    text: "🧛 Dracula",
  },
  {
    name: "cyberpunk",
    text: "🤖 Cyberpunk",
  },

  {
    name: "business",
    text: "🏢 Business",
  },

  {
    name: "coffee",
    text: "☕ Coffee",
  },
  {
    name: "forest",
    text: "🌳 Forest",
  },

  {
    name: "wireframe",
    text: "📏 Wireframe",
  },
  {
    name: "retro",
    text: "🌇 Retro",
  },
  {
    name: "luxury",
    text: "💎 Luxury",
  },
  {
    name: "fantasy",
    text: "🧚 Fantasy",
  },
  {
    name: "winter",
    text: "🌨️ Winter",
  },
  {
    name: "bumblebee",
    text: "🐝 Bumblebee",
  },
  {
    name: "light",
    text: "🌞 Light",
  },

  {
    name: "cupcake",
    text: "🧁 Cupcake",
  },
  {
    name: "emerald",
    text: "💎 Emerald",
  },
  {
    name: "corporate",
    text: "🏢 Corporate",
  },

  {
    name: "valentine",
    text: "🌸 Valentine",
  },
  {
    name: "garden",
    text: "🏡 Garden",
  },
  {
    name: "aqua",
    text: "💦 Aqua",
  },
  {
    name: "pastel",
    text: "🎨 Pastel",
  },

  {
    name: "cmyk",
    text: "🖨 CMYK",
  },
  {
    name: "autumn",
    text: "🍂 Autumn",
  },

  {
    name: "acid",
    text: "💊 Acid",
  },
  {
    name: "lemonade",
    text: "🍋 Lemonade",
  },
];

export const date: DateConfig = {
  locales: "en-US",
  options: {
    year: "2-digit",
    weekday: "long",
    month: "short",
    day: "numeric",
  },
};

export const pluck = (arr: any[], key: string) => arr.map((o) => o[key]);
