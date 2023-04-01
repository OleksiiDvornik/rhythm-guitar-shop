// Plugins import

import imagemin from 'gulp-imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import webp from 'gulp-webp'; 
import changed from 'gulp-changed';

// Paths import

import { publicFolder } from '../config/path.js';

// Tasks

export const createWebp = () => {
  return app.gulp.src(app.path.src.images)
    .pipe(changed(app.path.dest.images))
    .pipe(webp({ quality: 90 }))
    .pipe(app.gulp.dest(`${publicFolder}/img`))
    .pipe(app.gulp.dest(app.path.dest.images))
    .pipe(app.watcher.stream())
}

export const optimizeImages = () => {
  return app.gulp.src(app.path.src.images)
    .pipe(changed(app.path.dest.images))
    .pipe(imagemin([
      imageminMozjpeg({quality: 90, progressive: true}),
	    imageminPngquant({quality: [0.6, 0.8]}),
    ], {
      verbose: true
    }))
    .pipe(app.gulp.dest(`${publicFolder}/img`))
    .pipe(app.watcher.stream())
}
