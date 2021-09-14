module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1232px",
      },
    },
    extend: {
      colors: {
        "primary-dark": "#4c3398",
        primary: "#5d3ebc",
        secondary: "#7849f7",
        "primary-gray": "rgba(77,77,77,0.3)",
        "secondary-gray": "#838287",
        "brand-yellow": "#ffd300",
      },
      backgroundImage: {
        "get-app-bg":
          "url('https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png')",
        appgallery:
          "url('https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg')",
        googleplay:
          "url('https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg')",
        appstore:
          "url('https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg')",
        "phone-landing":
          "url('https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
