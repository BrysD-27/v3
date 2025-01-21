import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobileS: `max-width: 330px`,
        mobileM: `max-width: 400px`,
        mobileL: `max-width: 480px`,
        tabletS: `max-width: 600px`,
        tabletL: `max-width: 768px`,
        desktopXS: `max-width: 900px`,
        desktopS: `max-width: 1080px`,
        desktopM: `max-width: 1200px`,
        desktopL: `max-width: 1400px`,
      },
      colors: {
        foreground: "var(--foreground)",
      },
      fontFamily: {
        default: ['Inter var', 'ui-sans-serif', 'system-ui', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
