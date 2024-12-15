/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'mobile': { min: '300px', max: '600px' }, // Define a custom range for mobile devices
      },
    },
    screens: {
      md: '768px',
      lg: '1024px',
      laptopL: '1440px',
      desktop: '1875px',
    },
  },
  plugins: [],
};
