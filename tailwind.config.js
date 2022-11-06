/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        main: "url('https://img.freepik.com/free-vector/tropical-leaves-background-zoom_52683-40995.jpg?w=1500&t=st=1667200527~exp=1667201127~hmac=65b5871de3308197b0630665146871d60133a35107bfe068e222c43bf44c0ad6')",
      }),
      fontFamily: {
        shalimar: ["Shalimar", "handwriting"],
        Poppins: ["Poppins", "san-serif"],
        Poppins2: ["Poppins", "san-serif"],
        Open: ["Open Sans", "san-serif"],
        Bree: ["Bree Serif", "serif"],
      },
      colors: {
        primary: "#6A9483",
        secondary: "#A2BFAD",
        third: "#223C31",
      },
    },
  },
  plugins: [],
};
