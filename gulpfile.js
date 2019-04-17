var gulp = require('gulp');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var del = require('del');

gulp.task('hello', function() {
  console.log(`Oi Gulp`);
});

gulp.task('clean', function () {
  return del([
    'frontend/dist/**/*',
    'backend/public/**/*'
  ]);
});

gulp.task('vuetifyToPublic', function(){
  console.log("task vuetifyToPublic..");
  return gulp.src('node_modules/vuetify/dist/**')
    .pipe(gulp.dest('backend/public'));
});


gulp.task('teste', function() {
    console.log("task test");
    return gulp.src('frontend/dist/*.*')
       // .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('backend/public'));
});

gulp.task('templateToDist', function(){
  console.log("task templateToDist..");
  
  return gulp.src('*.html')
    .pipe(gulp.dest('frontend/dist'));
});

gulp.task('webpack',gulp.parallel('teste',  'vuetifyToPublic'), function(){
  console.log("task webpack..");
  return gulp.src('frontend/dist/index.js') //main.js
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('frontend/dist'));
});

gulp.task('default', gulp.parallel('webpack'));