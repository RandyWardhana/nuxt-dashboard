/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "var(--dark-primary)",
          secondary: "var(--dark-secondary)",
        },
        light: {
          primary: "var(--light-primary)",
          secondary: "var(--light-secondary)",
        },
        purple: "var(--purple)",
        green: "var(--green)",
        orange: "var(--orange)",
        'shamrock': {
          '50': '#f5fcfb',
          '100': '#ebfaf6',
          '200': '#cef2e9',
          '300': '#b1eadb',
          '400': '#76dbc0',
          '500': '#3bcba5',
          '600': '#35b795',
          '700': '#2c987c',
          '800': '#237a63',
          '900': '#1d6351'
        },
        'carrot-orange': {
          '50': '#fefaf4', 
          '100': '#fdf4e8', 
          '200': '#fae4c7', 
          '300': '#f7d4a5', 
          '400': '#f1b461', 
          '500': '#eb941d', 
          '600': '#d4851a', 
          '700': '#b06f16', 
          '800': '#8d5911', 
          '900': '#73490e'
      }
      }
    },
    darkSelector: ".dark-mode"
  },
  variants: {
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd",
      "hover",
      "responsive"
    ],
    borderColor: [
      "dark",
      "dark-focus",
      "dark-focus-within",
      "hover",
      "responsive"
    ],
    textColor: ["dark", "dark-hover", "dark-active", "hover", "responsive"]
  },
  plugins: [require("tailwindcss-dark-mode")()],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js"
    ]
  },
};
