/** @type {import('tailwindcss').Config} */
const defaultColors = require("tailwindcss/colors");
const defaultDropShadows = require("tailwindcss/defaultTheme").dropShadow;
const defaultBoxShadows = require("tailwindcss/defaultTheme").boxShadow;

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#818CF8",
        "main-contra": "#FFFFFF",
        sub: "#1F2836",
        "sub-contra": "#FFFFFF",
        // BASIC
        basic: "#F0F0F0",
        "basic-active": "#F0F0F0",
        "basic-contra": "#000000",
        // DEFAULT
        default: "#bdbebd",
        "default-active": "#a9a9a9",
        "default-contra": "#838995",
        // PRIMARY
        primary: "#1266F1",
        "primary-active": "#0c56d0",
        "primary-contra": "#FFFFFF",
        // SECONDARY
        footer: "#e9e9e9",
        "footer-active": "#bdbebd",
        "footer-contra": "#a9a9a9",
        // SUCCESS
        success: "#5cb85c",
        "success-active": "#00913b",
        "success-contra": "#FFFFFF",
        // INFO
        info: "#39C0ED",
        "info-active": "#16b5ea",
        "info-contra": "#ffffff",
        // WARNING
        warning: "#FFA900",
        "warning-active": "#d99000",
        "warning-contra": "#ffffff",
        // MODIFY
        modify: "#FFA900",
        "warning-active": "#d99000",
        "warning-contra": "#ffffff",
        // DANGER
        danger: "#F93154",
        "danger-active": "#f80c35",
        "danger-contra": "#ffffff",
        // LINK
        link: "#39C0ED",
        "link-active": "#39C0ED",
        "link-contra": "#39C0ED",
        // LIGHT
        light: "#FBFBFB",
        "light-active": "#e6e6e6",
        "light-contra": "#262626",
        // DARK
        dark: "#262626",
        "dark-active": "#131313",
        "dark-contra": "#FBFBFB",
        // Back
        Back: "#d4d4d4",
        "Back-active": "#131313",
        "Back-contra": "#FBFBFB",
        // Order State
        todo: "#FFA900",
        "todo-contra": "#ffffff",
        diamond: "#ff1493",
        "doing-contra": "#ffffff",
        platinum: "#00ffff",
        "doing-contra": "#ffffff",
        gold: "#ffd700",
        "doing-contra": "#ffffff",
        silver: "#c0c0c0",
        "doing-contra": "#ffffff",
        bronze: "#a0522d",
        "doing-contra": "#ffffff",
        // done: "",
        // rejected: "",
        canceled: "#F93154",
        bell: "#FFD700",
        "bell-off": "#d3d3d3",
        sky: defaultColors.sky,
        stone: defaultColors.stone,
        neutral: defaultColors.neutral,
        gray: defaultColors.gray,
        slate: defaultColors.slate,
        ...defaultColors,
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      // smaller
      jm: { max: "424px" },
      xs: { max: "299px" },
    },
    boxShadow: {
      "t-sm": "0 -1px 1px rgb(0 0 0 / 0.05)",
      t: ["0 -1px 2px rgb(0 0 0 / 0.1)", "0 -1px 1px rgb(0 0 0 / 0.06)"],
      "t-md": ["0 -4px 3px rgb(0 0 0 / 0.07)", "0 -2px 2px rgb(0 0 0 / 0.06)"],
      "t-lg": ["0 -10px 8px rgb(0 0 0 / 0.04)", "0 -4px 3px rgb(0 0 0 / 0.1)"],
      "t-xl": [
        "0 -20px 13px rgb(0 0 0 / 0.03)",
        "0 -8px 5px rgb(0 0 0 / 0.08)",
      ],
      "t-2xl": "0 -25px 25px rgb(0 0 0 / 0.15)",
      "t-inner": "inset 0 7px 9px -7px rgba(0,0,0,0.4)",
      ...defaultBoxShadows,
    },
    dropShadow: {
      "t-sm": "0 -1px 1px rgb(0 0 0 / 0.05)",
      t: ["0 -1px 2px rgb(0 0 0 / 0.1)", "0 -1px 1px rgb(0 0 0 / 0.06)"],
      "t-md": ["0 -4px 3px rgb(0 0 0 / 0.07)", "0 -2px 2px rgb(0 0 0 / 0.06)"],
      "t-lg": ["0 -10px 8px rgb(0 0 0 / 0.04)", "0 -4px 3px rgb(0 0 0 / 0.1)"],
      "t-xl": [
        "0 -20px 13px rgb(0 0 0 / 0.03)",
        "0 -8px 5px rgb(0 0 0 / 0.08)",
      ],
      "t-2xl": "0 -25px 25px rgb(0 0 0 / 0.15)",
      ...defaultDropShadows,
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
