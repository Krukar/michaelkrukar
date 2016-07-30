var gulp = require('gulp'),
uglify = require('gulp-uglify'),
rename = require("gulp-rename"),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer');

// Convert SASS to CSS
gulp.task('css', function () {
	return gulp.src('./scss/style.scss')
	.pipe(sass({
		includePaths: [require('bourbon').includePaths, require('bourbon-neat').includePaths, './ts'],
		outputStyle: 'compressed'
	})
	.on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(gulp.dest('../'));
});

// Compile min.js
gulp.task('js', function() {
	return gulp.src(['./scripts.js'])
	.pipe(uglify({
		compress:{
			drop_console: true
		}
	}))
	.pipe(rename({
		suffix: '.min'
	}))
	.pipe(gulp.dest('../'));
});

// Default Task
gulp.task('default', ['css'], function() {
	gulp.watch(['./scss/**/*.scss', './ts/**/*.scss'], ['css']);
});