// Plugins import

import changed from 'gulp-changed';
import fonter from 'gulp-fonter-2';
import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';

// Paths import

import { srcFolder, publicFolder } from '../config/path.js';

// Tasks

export const convert2ttf = () => {
  return (app.gulp.src(`${srcFolder}/fonts/*.otf`))
    .pipe(changed(`${srcFolder}/fonts`))
    .pipe(fonter({
      formats: ['ttf']
    }))
    .pipe(app.gulp.dest(`${srcFolder}/fonts`))
}

export const convert2woff = () => {
  return app.gulp.src(app.path.src.fonts)
    .pipe(changed(`${publicFolder}/fonts`))
    .pipe(ttf2woff())
    .pipe(app.gulp.dest(`${publicFolder}/fonts`))
    .pipe(app.gulp.src(app.path.src.fonts))
    .pipe(changed(`${publicFolder}/fonts`))
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(`${publicFolder}/fonts`))
}
