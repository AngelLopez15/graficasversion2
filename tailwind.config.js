// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.js', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        "colors": {
          "guinda" : "#691C32",
          "dorado": "#BC955C",
          "verde": "#10312B",
          "grisClaro": "#6F7271"
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }