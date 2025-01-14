/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/preline.js',
  ],//        //  |>|> >=|>|>|>    *)::--)|(--::(*

  theme: {
    extend: {
      colors:{

        appYellow :"var(--yellow)",
        white6 : "var(--white-op6)",
        white7 : "var(#ffffffb3)",
        halfYellow : "var(--half-yellow)",
        halfBlack : "var(--half-black)", 
        appWhite : "var(--wahite)",
      },
      fontFamily:{

        sans : ["Noto Sans", "serif;"],
        arboret : ["Noto Sans", "serif"],
        palywrite : ["Playwrite AU SA", "serif"],
        merriweather :["Merriweather", "serif"],
        abhyalibre : ["Abhaya Libre", "serif"]
      },
      screens:{
        xs: "480px",
        sml : "750px",
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
};