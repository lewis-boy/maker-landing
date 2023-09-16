import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors:{
      'light-blue': 'hsl(179,80%,58%)',
      'dark-blue': 'hsl(206,84%,22%)',
      'grey': 'hsl(225,14%,53%)',
      'white': 'hsl(0,0%,100%)',
      'abyss': 'hsl(230,60%,8%)',
      'red': 'hsl(343,100%,58%)',
    },
    fontSize: {
      'h-lg': ['48px', {lineHeight: '116%'}],
      'h-md': ['40px', {lineHeight: '138%'}],
      'h-sm': ['32px', {lineHeight: '138%'}],
      'h-xs': ['18px', {lineHeight: '138%'}],
      'p': ['15px', {lineHeight: '167%'}],
    },
    screens:{
      'tablet': '768px',
      'desktop': '1440px',
    },
    extend: {
      fontFamily: {
        'manrope': 'var(--font-manrope)' 
      },
    },
  },
  plugins: [],
} satisfies Config;
