var gulp =require ('gulp'),
	less =require('gulp-less'),
    sass =require('gulp-sass'),
	pug  =require('gulp-pug'),
	//pref =require('autoprefixer'),
	browserSync=require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer');
//const concat = require('concat');
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
    var concat=require('gulp-concat');
    const sourcemaps = require('gulp-sourcemaps');
    const babel = require('gulp-babel');
    var   preproc=[
 
        precss,
        cssnext({
            features:{
                autoprefixer:{
                    grid: true, 
                    browsers: ['last 50 versions', 'ie 6-8', 'Firefox > 20']  
                }
            }
        }),

         ];
       /*  gulp.task('components', () => {
            //    const postcss    = require('gulp-postcss')
                //const sourcemaps = require('gulp-sourcemaps')
              
                return gulp.src(['..scss',"!./app/preproc/*.scss"])
                    .pipe(sass().on('error', sass.logError))
                //  .pipe( sourcemaps.init() )
                  .pipe( postcss(preproc) )
                 // .pipe( sourcemaps.write('.') )
                  .pipe( gulp.dest('./dest') )
                  .pipe(browserSync.reload({stream:true}));
            
              })*/
    gulp.task('globalcss', () => {
        return gulp.src(['./app/preproc/*.scss'])
            .pipe(sass().on('error', sass.logError))
                    //  .pipe( sourcemaps.init() )
                      .pipe( postcss(preproc) )
                     // .pipe( sourcemaps.write('.') )
                      .pipe( gulp.dest('./dest/css') )
                      .pipe(browserSync.reload({stream:true}));
                
                  })
        
gulp.task('js-plug',()=>{
    return gulp.src([
        './app/js/slick.min.js',
        './app/js/jq.touch.min.js',
        './app/js/loadimg.js',
        './app/js/youtube.js',
        './app/js/jquery.magnific-popup.min.js',
        './app/js/objectfit.js',
    ])
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest('./dest/js/'));
})
gulp.task('js-index',()=>{
    return gulp.src([
        //'./app/js/map.js',
        './app/js/interface.js'
    ])
    .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
    .pipe(concat('index.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dest/js/'));
})
gulp.task('pug',function () {
	return gulp.src('./app/**/*.pug')
	.pipe(pug({
		pretty:true
	}))
	.pipe(gulp.dest('./dest'));
});
gulp.task('serve',['globalcss'],function(){
    browserSync.init({
        server:"./dest"
    });

    gulp.watch("./app/js/*.js",['js-plug']);
    gulp.watch("./app/js/*.js",['js-index']);
    gulp.watch("./app/preproc/*.scss",['globalcss']);
    gulp.watch("./app/**/*.pug",['pug']);
    gulp.watch("./dest/*.html").on("change",browserSync.reload);

});
gulp.task('default',['serve']);