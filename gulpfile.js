var gulp = require('gulp'),
		sass = require('gulp-sass'),
		plumber = require('gulp-plumber'),
		autoprefixer = require('gulp-autoprefixer'),
		imagemin = require('gulp-imagemin'),
		uglify = require('gulp-uglify'),
		rename = require('gulp-rename'),
		minifyCSS = require('gulp-minify-css');

gulp.task('default', ['sass', 'watch', 'js', 'imagemin']);

// sass
gulp.task('sass', function() {
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
gulp.task('imagemin', function() {
	gulp.src('./src/images/**/*')
		.pipe(plumber())
		.pipe(imagemin())
		.pipe(gulp.dest('./dist/assets/images'));
});

// javascript
gulp.task('js', function() {
	gulp.src('./src/js/**/*.js')
		.pipe(plumber())
		.pipe(gulp.dest('./dist/assets/js'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/assets/js'));
});

gulp.task('once', ['sass', 'js', 'imagemin']);

gulp.task('watch', function() {
	gulp.watch('./src/sass/**/*.scss', ['sass']);
	gulp.watch('./src/images/*', ['imagemin']);
	gulp.watch('./src/js/**/*.js', ['js']);
});