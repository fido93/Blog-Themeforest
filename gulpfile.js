const gulp = require('gulp');
const browserSync  = require('browser-sync').create();
const sass = require('gulp-sass');
const rename = require('gulp-rename');

//compile SASS files into CSS files
gulp.task('sass', () => {
  return gulp.src('src/scss/*.scss')
  .pipe(sass({
    errorLogToConsole: true, //check error style SASS
    outputStyle: 'compressed'
  }))
  .on('error', console.error.bind(console))
  .pipe(rename( { suffix: '.min' } ))
  .pipe(gulp.dest('src/css'))
  .pipe(browserSync.stream());
})

//create a server and watching files
gulp.task('serve', ['sass'], () => {
  browserSync.init({
    server:'./src'
  });

  gulp.watch('src/scss/*.scss', ['sass']);
  gulp.watch('src/*.html').on('change', browserSync.reload);
})

gulp.task('default', ['serve']);
