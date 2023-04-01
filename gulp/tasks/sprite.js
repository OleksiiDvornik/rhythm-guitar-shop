// Plugins import

import imagemin from 'gulp-imagemin';
import imageminSvgo from 'imagemin-svgo';
import sprite from 'gulp-svg-sprite';

// Tasks

const svgSprite = () => {
  return app.gulp.src(app.path.src.svg)
    .pipe(sprite({
        mode: {
          symbol: {
            sprite: "../sprite.svg"
          }
        },
        svg: { 
          xmlDeclaration: true,
        },
      }
    ))
    .pipe(imagemin([
      imageminSvgo({
        js2svg: {
          indent: 2,
          pretty: true,
        },
        plugins: [
          {
            name: "removeAttrs",
            params: {
              attrs: "(fill|stroke)"
            }
          },
        ]
      })
    ]))
    .pipe(app.gulp.dest(app.path.dest.images))
    .pipe(app.watcher.stream())
}

export default svgSprite;
