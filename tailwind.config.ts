import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        lg: "50px",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {},
  },
  plugins: [
    // @ts-ignore
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-thin::-webkit-scrollbar': {
          width: '7px',
        },
        '.scrollbar-thin::-webkit-scrollbar-thumb': {
          backgroundColor: '#666',
          borderRadius: '10px',
        },
        '.scrollbar-thin::-webkit-scrollbar-track': {
          backgroundColor: '#444',
        },
        '.scrollbar-thin': {
          scrollbarWidth: 'thin',
          scrollbarColor: '#666 #444',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
export default config;
