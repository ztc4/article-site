/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        
      },
      fontFamily:{

        "haskoy-medium":"haskoy-medium",
        "haskoy-semibold":"haskoy-semibold",
        "haskoy-extrabold":"haskoy-extrabold",

        "sloth-regular":["sloth-regular"],
        "sloth-semibold":["sloth-semibold"],
        "sloth-bold":["sloth-bold"],
        "sloth-extrabold":["sloth-extrabold"],

        haskoy: ["haskoy","inter"],
        martel: ["martel","inter"],
      },
      colors:{
        "blue":"#2563EB",
        "purple":"#655593",
        "bright-purple":"#BC6CFF",
        "purple-accent":"#C1BBD4",
        "white":"#FFFFFF",
        "dark-purple":"#332B5D",
        "black":"#333333",
        "purple-blue":"#393D5E",
        "pink":"#EFD4FF"
      },
      fontSize: {
        "hl": "4.625rem", // 74px
        "hs": "2.5rem",   // 40px
        "ps": "0.75rem",  // 12px
        "pl": "1.375rem"  // 22px
      },
      backgroundImage:{
        'square-gradient': "url('/article-background-2.svg')",
        'squares': "url('/article-background-1.svg')" // Replace with your image path
      },
      backgroundSize: {
        'size-200': '200%',  // Example of custom size
        'size-1/2': '50%',   // Another example
      },
    },
  },
  plugins: [],
}
