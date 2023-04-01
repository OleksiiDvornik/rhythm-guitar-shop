// Plugins import

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import sourcemap from 'gulp-sourcemaps';
import cleanCSS from 'gulp-clean-css';
import mediaQueries from 'gulp-group-css-media-queries';
import rename from 'gulp-rename';
import size from 'gulp-size';

// Configuration

const sass = gulpSass(dartSass);

// Tasks

export const styles = () => {
  return app.gulp.src(app.path.src.styles)
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemap.write("."))
    .pipe(app.gulp.dest(app.path.dest.styles))
    .pipe(app.watcher.stream())
}

export const stylesProd = () => {
  return app.gulp.src(app.path.src.styles)
    .pipe(sass())
    .pipe(mediaQueries())
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(size())
    .pipe(app.gulp.dest(app.path.dest.styles))
}
