var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var cleanCSS = require('gulp-clean-css');


gulp.task('styles', function() {
  gulp.src('css/*.scss')
	  .pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('public/stylesheets/'));
});

gulp.task('cleanCSS', function(){
  gulp.src('css/*.css')
	  .pipe(cleanCSS())
		.pipe(gulp.dest('public/stylesheets/'));
});

gulp.task('default', function(){
  gulp.watch('css/*.scss', ['styles']); 
});
