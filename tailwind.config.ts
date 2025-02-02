import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/public/**/*{.png, .ts}"
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
        foreground: "var(--color-zinc-300)",
      },
      fontFamily: {
        default:  ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
