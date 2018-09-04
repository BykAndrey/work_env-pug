var gulp =require ('gulp'),
	less =require('gulp-less'),
	pug  =require('gulp-pug'),
	pref =require('autoprefixer'),
	browserSync=require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer');
var LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefixPlugin = new LessPluginAutoPrefix({browsers: ["last 18 versions"]});

gulp.task('less',function(){
	return gulp.src('./app/less/*.less')
        .pipe(less({ plugins: [autoprefixPlugin] }))
        .pipe(gulp.dest('./dest/css'))
        .pipe(browserSync.reload({stream:true}))
});
gulp.task('pug',function () {
	return gulp.src('./app/*.pug')
	.pipe(pug({
		pretty:true
	}))
	.pipe(gulp.dest('./dest'));
});
gulp.task('serve',['less'],function(){
    browserSync.init({
        server:"./dest"
    });
    gulp.watch("./app/less/*.less",['less']);
    gulp.watch("./app/*.pug",['pug']).on("change",browserSync.reload);;
    gulp.watch("./app/parts/*.pug",[]).on("change",browserSync.reload);;
    gulp.watch("./dest/*.html").on("change",browserSync.reload);

});
gulp.task('default',['serve']);