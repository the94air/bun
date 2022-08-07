let mix = require("laravel-mix");
let tailwindcss = require("tailwindcss");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix
  .setPublicPath("docs")
  // .setResourceRoot('http://fun.test/')
  .js("src/javascript/app.js", "docs/javascript")
  .sass("src/sass/app.scss", "docs/css")
  .copyDirectory("src/images", "docs/images")
  .options({
    processCssUrls: false,
    postCss: [tailwindcss("./tailwind.js")],
  });
