var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var del = require('del');
var runSequence = require('run-sequence');
var gutil = require('gulp-util');
var ftp = require('gulp-ftp');
var prompt = require('gulp-prompt');
var autoprefixer = require('gulp-autoprefixer');



gulp.task('scss', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass({
      includePaths: ['node_modules/support-for/sass'],
    })) // Converts Sass to CSS with gulp-sass
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream())
});

gulp.task('build:html', function(){
  return gulp.src(['app/*.html'])
    .pipe(gulp.dest('deploy'))
});

gulp.task('build:css', function(){
  return gulp.src(['app/css/*.css'])
    .pipe(gulp.dest('deploy/css'))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('default', ['scss','browserSync'], function(){
  gulp.watch('app/scss/**/*.scss', ['scss']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/*.php', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
  gulp.watch('app/img/**', browserSync.reload);
});

gulp.task('clean:deploy', function() {
  console.log('Cleaning deploy dir');
  return del.sync(['deploy/**', '!deploy']);
});

gulp.task('upload', function () {
    return gulp.src('/')//it may be anything
    .pipe(prompt.prompt({
    type: 'password',
    name: 'pass',
    message: 'Please enter your password'
    }, function(res){
        gulp.src('deploy/**')//now you have to target what you want to send
        .pipe(ftp({
            host: 'ftp.mitchell-williams.com.au',
            user: 'atom@mitchell-williams.com.au',
            pass: res.pass,
            remotePath: '/SubDomains/cheekyfeedback/'
        })).pipe(gutil.noop());
    }));
});

gulp.task('deploy', function() {
  runSequence('clean:deploy','scss',['build:html','build:css'],'upload');
  console.log('Deployed!');
});
