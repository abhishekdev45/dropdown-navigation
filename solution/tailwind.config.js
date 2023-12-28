module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        header: "#f6f6f4",
        headerHover: "white",
        section: "#f6f6f4",
        sectionHover: "white",
      },
      transitionProperty: {
        'bg-color': 'background-color',
      },
    },
  },
  plugins: [],
}
