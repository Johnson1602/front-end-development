// 引入 gulp 包
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const fileinclude = require('gulp-file-include');
const less = require('gulp-less');
const csso = require('gulp-csso');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// 创建第一个 gulp 任务
// 第一个参数是任务的名称
// 第二个参数是任务内容，是一个 callback function
gulp.task('first', () => {
	console.log('running my first gulp task');
	// 获取源文件
	// 使用 pipe 处理文件，将源文件复制到目标文件夹
	return gulp.src('src/css/base.css')
		.pipe(gulp.dest('dist/css'));
});

// html 任务
// 抽取公共部分并压缩代码
gulp.task('htmlmin', () => {
	return gulp.src('src/*.html')
		// 先抽取公共部分
		.pipe(fileinclude())
		// 再进行代码压缩
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest('dist'));
});

// css 任务
// 转换 less 语法为 css 语法，并压缩所有 css 文件
gulp.task('cssmin', () => {
	return gulp.src(['src/css/*.less', 'src/css/*.css'])
		.pipe(less())
		.pipe(csso())
		.pipe(gulp.dest('dist/css'));
});

// js 任务
// 转换 ES6 代码为 ES5 代码，并压缩
gulp.task('jsmin', () => {
	return gulp.src('src/js/*.js')
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

// 复制文件夹
gulp.task('copy', () => {
	gulp.src('src/images/*')
		.pipe(gulp.dest('dist/images'));
	return gulp.src('src/lib/*/*')
		.pipe(gulp.dest('dist/lib'));
});

// 构建 default 任务
// gulp.task('default', ['htmlmin', 'cssmin', 'jsmin', 'copy']);
