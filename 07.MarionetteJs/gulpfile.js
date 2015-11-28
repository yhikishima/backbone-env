var gulp =  require('gulp');
var babel =  require('gulp-babel');
var plumber = require('gulp-plumber');
var bower = require('main-bower-files');
var concat = require('gulp-concat');
var filter = require('gulp-filter');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');

gulp.task('babel', function() {
  gulp.src('src/js/*.js')
    .pipe(plumber())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('bower', function() {
  gulp.src(bower())
    .pipe(filter('**/*.js'))
    .pipe(concat('libs.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'))
});

gulp.task('watch', function() {
  gulp.watch('src/js/*.js', ['babel']);
});

gulp.task('copy', function() {
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist/'));
});


gulp.task('webserver', function() {
  gulp.src('dist')
    .pipe(webserver({
      host: 'localhost',
      port: '8000',
      livereload: true
    }));
});

gulp.task('default', ['babel', 'bower', 'copy', 'watch', 'webserver']);