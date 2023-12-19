/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
      options: {
        // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
        // For more details on this addon's options.
        postCss: true,
      },
    },
  ],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      "2xl": { min: "1921px" },

      xl: { min: "1735px" },

      lg: { min: "1279px" },

      md: { min: "1023px" },

      sm: { min: "767px" },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [],
};
