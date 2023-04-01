// Plugins import

import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import rename from 'gulp-rename';
import size from 'gulp-size';

// Config import

import webpackConfig from '../../webpack.config.js';

// Tasks

export const scripts = () => {
  return app.gulp.src(app.path.src.scripts)
    .pipe(webpackStream(webpackConfig('development'), webpack))
    .pipe(app.gulp.dest(app.path.dest.scripts))
    .pipe(app.watcher.stream())
}

export const scriptsProd = () => {
  return app.gulp.src(app.path.src.scripts)
    .pipe(webpackStream(webpackConfig('production'), webpack))
    .pipe(rename({ suffix: '.min' }))
    .pipe(size())
    .pipe(app.gulp.dest(app.path.dest.scripts))
}
