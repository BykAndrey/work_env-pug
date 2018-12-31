var gulp =require ('gulp'),
	less =require('gulp-less'),
    sass =require('gulp-sass'),
	pug  =require('gulp-pug'),
	//pref =require('autoprefixer'),
	browserSync=require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer');
var LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefixPlugin = new LessPluginAutoPrefix({browsers: ["last 18 versions"]});





    /**
     * PostCss
     * 
    */
   var postcss=require('gulp-postcss');
 //  var sass=require('postcss-sass');
    var cssnext=require('postcss-cssnext');
    var autoprefixer=require('autoprefixer');
    var precss=require('precss');
   /**
    * 
    */
/*
//OLD
gulp.task('less',function(){
	return gulp.src('./app/preproc/*.less')
        .pipe(less({ plugins: [autoprefixPlugin] }))
        .pipe(gulp.dest('./dest/css'))
        .pipe(browserSync.reload({stream:true}));
});


//OLD

gulp.task('scss',function(){
	return gulp.src('./app/preproc/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./dest/css'))
        .pipe(browserSync.reload({stream:true}));
});
*/


gulp.task('postcss', () => {
//    const postcss    = require('gulp-postcss')
    //const sourcemaps = require('gulp-sourcemaps')
  var   preproc=[
 
        precss,
        cssnext({
            features:{
                autoprefixer:{
                    grid: true, 
                    browsers: ['last 50 versions', 'ie 6-8', 'Firefox > 20']  
                }
            }/*
            "browserslist": [
                "last 1 version",
                "> 1%",
                "maintained node versions",
                "not dead"
              ]*/
        }),

          /*  autoprefixer({
            browsers: ['last 100 versions'],
            cascade: false
        })*/];
    return gulp.src('./app/preproc/*.scss')
        .pipe(sass().on('error', sass.logError))
    //  .pipe( sourcemaps.init() )
      .pipe( postcss(preproc) )
     // .pipe( sourcemaps.write('.') )
      .pipe( gulp.dest('./dest/css') )
      .pipe(browserSync.reload({stream:true}));
  })





gulp.task('pug',function () {
	return gulp.src('./app/*.pug')
	.pipe(pug({
		pretty:true
	}))
	.pipe(gulp.dest('./dest'));
});
gulp.task('serve',['postcss'],function(){
    browserSync.init({
        server:"./dest"
    });
 //   gulp.watch("./app/preproc/*.less",['less']);
   // gulp.watch("./app/preproc/*.scss",['scss']);
    gulp.watch("./app/preproc/*.scss",['postcss']);
    gulp.watch("./app/*.pug",['pug']).on("change",browserSync.reload);;
    gulp.watch("./app/parts/*.pug",[]).on("change",browserSync.reload);;
    gulp.watch("./dest/*.html").on("change",browserSync.reload);

});
gulp.task('default',['serve']);