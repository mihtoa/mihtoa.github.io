const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minifyCSS = require('gulp-csso');

function css() {
  return src('src/css/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('dist/css'));
}

exports.css = css;
exports.default = css;

watch('src/css/*.scss', css);
