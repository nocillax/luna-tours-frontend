/** @type {import('@tailwindcss/cli').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        findel: ["Findel Display", "serif"],
      },
    },
  },
  plugins: [],
};
