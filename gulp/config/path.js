export const publicFolder = './public'
export const srcFolder = './src';
export const buildFolder = './dist';

const path = {
  public: {
    html: `${publicFolder}/*.html`,
    images: `${publicFolder}/img/**/*.{jpeg,jpg,png,gif,svg,ico}`,
    fonts: `${publicFolder}/fonts/*.{woff,woff2}`,
    libs: `${publicFolder}/libs/**/*.*`,
    files: [`${publicFolder}/*.*`, `!${publicFolder}/*.html`]
  },
  src: {
    styles: `${srcFolder}/scss/*.scss`,
    scripts: `${srcFolder}/scripts/*.js`,
    images: `${srcFolder}/img/**/*.{jpeg,jpg,png}`,
    svg: `${srcFolder}/img/icons/*.svg`,
    fonts: `${srcFolder}/fonts/*.ttf`
  },
  dest: {
    html: buildFolder,
    styles: `${buildFolder}/styles`,
    scripts: `${buildFolder}/scripts`,
    images: `${buildFolder}/img`,
    fonts: `${buildFolder}/fonts`,
    libs: `${buildFolder}/libs`,
    files: buildFolder,
  },
  watch: {
    html: [`${publicFolder}/*.html`, `${srcFolder}/html/*.html`],
    styles: `${srcFolder}/scss/**/*.scss`,
    scripts: `${srcFolder}/scripts/**/*.js`,
  }
}

export default path;
