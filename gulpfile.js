var gulp = require('gulp');
var sass = require('gulp-sass');

// compile scss into css X-Team
gulp.task('sass', gulp.series(function() {
    return gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
}));

// watching scss files X-Team 
gulp.task('serve', gulp.series('sass', function() {
    gulp.watch('./scss/*.scss', gulp.series('sass'));
}));

gulp.task('default', gulp.series('serve'));