
import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { bg:"#fff8f5", text:"#1f120e", muted:"#6b4a3a", accent:"#c0392b", primary:"#8B3A1C" },
      borderRadius: { xl:"14px","2xl":"18px" },
      boxShadow: { soft:"0 12px 40px rgba(0,0,0,.10)" }
    },
  },
  plugins: [],
} satisfies Config;
