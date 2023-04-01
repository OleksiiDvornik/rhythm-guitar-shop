// Plugins import

import fileinclude from 'gulp-file-include';
import replace from 'gulp-replace';
import htmlmin from 'gulp-htmlmin';
import size from 'gulp-size';

// Tasks

export const html = () => {
  return app.gulp.src(app.path.public.html)
    .pipe(fileinclude())
    .pipe(replace(/@img\//g, './img/'))
    .pipe(app.gulp.dest(app.path.dest.html))
    .pipe(app.watcher.stream())
}

export const htmlProd = () => {
  return app.gulp.src(app.path.public.html)
    .pipe(fileinclude())
    .pipe(replace('index.css', 'index.min.css'))
    .pipe(replace('index.js', 'index.min.js'))
    .pipe(replace(/@img\//g, './img/'))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(size())
    .pipe(app.gulp.dest(app.path.dest.html));
}
