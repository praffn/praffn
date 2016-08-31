const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const minifyCSS = require('gulp-minify-css');

gulp.task('default', ['sass', 'watch', 'js', 'imagemin']);

// sass
gulp.task('sass', () => {
  gulp.src('./src/sass/main.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/assets/css/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/assets/css'));
});

// img optimization
gulp.task('imagemin', () => {
  gulp.src('./src/images/**/*')
    .pipe(plumber())
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/assets/images'));
});

// javascript
gulp.task('js', () => {
  gulp.src('./src/js/**/*.js')
    .pipe(plumber())
    .pipe(gulp.dest('./dist/assets/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/assets/js'));
});

gulp.task('once', ['sass', 'js', 'imagemin']);

gulp.task('watch', () => {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  gulp.watch('./src/images/*', ['imagemin']);
  gulp.watch('./src/js/**/*.js', ['js']);
});
