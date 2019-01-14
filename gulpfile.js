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
    var cpncat=require('gulp-concat');

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
         gulp.task('components', () => {
            //    const postcss    = require('gulp-postcss')
                //const sourcemaps = require('gulp-sourcemaps')
              
                return gulp.src(['./app/**/*.scss',"!./app/preproc/*.scss"])
                    .pipe(sass().on('error', sass.logError))
                //  .pipe( sourcemaps.init() )
                  .pipe( postcss(preproc) )
                 // .pipe( sourcemaps.write('.') )
                  .pipe( gulp.dest('./dest') )
                  .pipe(browserSync.reload({stream:true}));
            
              })
    gulp.task('globalcss', () => {
      
                  
                    return gulp.src(['./app/preproc/*.scss'])
                        .pipe(sass().on('error', sass.logError))
                    //  .pipe( sourcemaps.init() )
                      .pipe( postcss(preproc) )
                     // .pipe( sourcemaps.write('.') )
                      .pipe( gulp.dest('./dest/css') )
                      .pipe(browserSync.reload({stream:true}));
                
                  })





gulp.task('pug',function () {
	return gulp.src('./app/**/*.pug')
	.pipe(pug({
		pretty:true
	}))
	.pipe(gulp.dest('./dest'));
});
gulp.task('serve',['globalcss','components'],function(){
    browserSync.init({
        server:"./dest"
    });
 //   gulp.watch("./app/preproc/*.less",['less']);
   // gulp.watch("./app/preproc/*.scss",['scss']);
   gulp.watch("./app/components/**/*.scss",['components']);
   gulp.watch("./app/preproc/*.scss",['globalcss']);
    gulp.watch("./app/**/*.pug",['pug'])//.on("change",browserSync.reload);;
   // gulp.watch("./app/parts/*.pug",[]);//.on("change",browserSync.reload);;
    gulp.watch("./dest/*.html").on("change",browserSync.reload);

});
gulp.task('default',['serve']);