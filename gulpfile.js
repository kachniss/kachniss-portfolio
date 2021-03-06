const gulp = require('gulp');
const prettyError = require('gulp-prettyerror');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const eslint = require('gulp-eslint');
const browserSync = require('browser-sync');
const imagemin = require('gulp-imagemin');

// Create basic Gulp tasks

gulp.task('sass', function() {
  return gulp
    .src('./sass/style.scss', { sourcemaps: true })
    .pipe(prettyError())
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions']
      })
    )
    .pipe(cssnano())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('lint', function() {
  return gulp
    .src(['./js/*.js'])
    .pipe(prettyError())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task(
  'scripts',
  gulp.series('lint', function() {
    return gulp
      .src('./js/*.js')
      .pipe(uglify())
      .pipe(
        rename({
          extname: '.min.js'
        })
      )
      .pipe(gulp.dest('./build/js'));
  })
);

gulp.task('image-min', function() {
  gulp.src('./public/images/**')
      .pipe(imagemin())
      .pipe(gulp.dest('./build/images'))
});

// Set-up BrowserSync and watch

gulp.task('browser-sync', function() {
  browserSync.init({
     server: {
        baseDir: "./"
     }
  });

  gulp.watch(['build/css/*.css', 'build/js/*.js']).on('change', browserSync.reload);
});

gulp.task('watch', function() {
  gulp.watch('js/*.js', gulp.series('scripts'));
  gulp.watch('**/*.scss', gulp.series('sass'));
  gulp.watch('*.html',  gulp.series('reload'));
});

gulp.task('reload', function() {
  browserSync.reload();
});

gulp.task('default', gulp.parallel('browser-sync', 'watch', 'image-min'));
