var gulp =  require('gulp');
var babel =  require('gulp-babel');

gulp.task('babel', function() {
  gulp.src('src/js/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('watch', function() {
  gulp.watch('src/js/*.js', ['babel']);
});

gulp.task('default', ['babel', 'watch']);