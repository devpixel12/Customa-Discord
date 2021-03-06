var gulp = require("gulp");
var cleanCss = require("gulp-clean-css");

var modules = [
  "Base",
  "Chat",
  "Emoji",
  "Misc",
  "Sidebar",
  "Titlebar",
  "Webkit"
];
var paths = {
  src: modules.map(dir => dir + "/**/*.m.css"),
  dest: "dist"
};

function minify() {
  return gulp
    .src(paths.src, { base: "." })
    .pipe(cleanCss())
    .pipe(gulp.dest(paths.dest));
}

exports.default = minify;
