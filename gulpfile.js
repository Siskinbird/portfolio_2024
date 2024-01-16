/** Основной модуль Gulp */
import gulp from 'gulp';

/** Импорт путей */
import { path } from './gulp/config/path.js';

/** Импорт общих плагинов */
import { plugins } from './gulp/config/plugins.js';


/** Передаём значение в глобальную переменную*/
global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins
}

//Импорт задач
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import {otfToTtf, ttfToWoff, fontsStyle} from './gulp/tasks/fonts.js'
import {svgSprive} from "./gulp/tasks/svgSprive.js"


const watcher = () => {
  gulp.watch(path.watch.files, copy)
  gulp.watch(path.watch.html, html)
  gulp.watch(path.watch.scss, scss)
  gulp.watch(path.watch.js, js)
  gulp.watch(path.watch.images, images)
}


export { svgSprive }

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

const mainTasks = gulp.parallel(fonts, copy, html, scss, js, images);

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

//Выполнение сценария по умолчанию 
gulp.task('default', dev);