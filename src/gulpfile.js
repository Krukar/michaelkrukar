var gulp = require('gulp'),
ts = require('gulp-typescript'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
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

// Default Task
gulp.task('default', ['css'], function() {
	gulp.watch(['./scss/**/*.scss', './ts/**/*.scss'], ['css']);
});