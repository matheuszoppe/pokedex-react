module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgPage: "url(/src/assets/bgPage.png)",
      },
      shadow:{
        md: '0px 6px 6px rgba(0, 0, 0, 0.8)'
      }
    },
  },
  plugins: [],
};
