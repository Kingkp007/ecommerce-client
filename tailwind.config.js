/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        primary: "#fea928",
        secondary:"#ed8900",
        customGray: '#e5e7eb'
      },
      container: {
        center:true,
        padding: {
          DEFAULT:"1rem",
          sm:"3rem",
        }
      }
    },
   
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}