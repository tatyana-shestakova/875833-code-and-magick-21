const path = require("path");

module.exports = {
  entry: [
    "./js/util.js",
    "./js/backend.js",
    "./js/debounce.js",
    "./js/dialog.js",
    "./js/colorize.js",
    "./js/render.js",
    "./js/validation.js",
    "./js/setup.js",
    "./js/stat.js",
    "./js/game.js"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname),
    iife: true
  },
  devtool: false
}
