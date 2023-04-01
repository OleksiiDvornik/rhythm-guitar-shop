// Plugins import

import gulp from 'gulp';
import browserSync from 'browser-sync';

// Paths import

import path, { buildFolder } from './gulp/config/path.js';

// Separate tasks import

import { html, htmlProd } from './gulp/tasks/html.js';
import { styles, stylesProd } from './gulp/tasks/styles.js';
import { scripts, scriptsProd } from './gulp/tasks/scripts.js';
import { copyRoot, copyFonts, copyLibs, copyImages } from './gulp/tasks/copy.js';
import { optimizeImages, createWebp } from './gulp/tasks/images.js';
import { convert2ttf, convert2woff} from './gulp/tasks/fonts.js';
import svgSprite from './gulp/tasks/sprite.js';
import clear from './gulp/tasks/clear.js';
 
// Configuration global variable

global.app = {
  path: path,
  gulp: gulp,
  watcher: browserSync,
};

// Browser sync configuration

browserSync.create();

const watch = () => {
  browserSync.init({
    server: {
      baseDir: buildFolder
    }
  });
  app.gulp.watch(app.path.dest.html).on('change', browserSync.reload);
  app.gulp.watch(app.path.watch.html, html);
  app.gulp.watch(app.path.watch.styles, styles);
  app.gulp.watch(app.path.watch.scripts, scripts);
  app.gulp.watch(app.path.public.images, copyImages);
  app.gulp.watch(app.path.src.images, images);
  app.gulp.watch(app.path.src.svg, svgSprite);
};

// Gulp tasks

const copy = gulp.series(copyRoot, copyFonts, copyLibs, copyImages);
const images = gulp.series(createWebp, optimizeImages, svgSprite);

export const otf = convert2ttf;
export const woff = convert2woff;

export const build = gulp.series(
  clear, 
  htmlProd, 
  stylesProd, 
  scriptsProd, 
  images, 
  copy,
);

export default gulp.parallel(
  html, 
  styles, 
  scripts, 
  images, 
  copy, 
  watch
);
