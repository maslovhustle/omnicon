var gulp         = require('gulp');
var sass         = require('gulp-sass');
var concat       = require('gulp-concat');
var sourcemaps   = require('gulp-sourcemaps');
var bower        = require('gulp-bower');
var del          = require('del');
var autoprefixer = require('gulp-autoprefixer');
var runSequence  = require('run-sequence');
var jade         = require('gulp-jade');
var addsrc       = require('gulp-add-src');
var cleanCSS     = require('gulp-clean-css');

gulp.task('sass', function(){
    gulp.src('src/**/*.sass')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(concat('style.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/css'))
});

//gulp.task('sass', function () {
//    gulp.src('src/**/*.sass')
//        .pipe(sass())
//        .pipe(gulp.dest('public'));
//});

gulp.task('jade', function () {
    gulp.src('src/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('public'));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['sass']);
    gulp.watch('src/*.*', ['jade']);
});


gulp.task('clean', function(){
        return del('public');
});

gulp.task('build', function() {
    runSequence([ 'clean' ], 'sass', 'jade', 'watch');
});

gulp.task('default', [ 'build' ]);
