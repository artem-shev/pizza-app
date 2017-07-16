const gulp = require('gulp');
const filter = require('gulp-filter');
const useref = require('gulp-useref');
const lazypipe = require('lazypipe');
const rev = require('gulp-rev');
const revReplace = require('gulp-rev-replace');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const htmlmin = require('gulp-htmlmin');
const sourcemaps = require('gulp-sourcemaps');
const uglifySaveLicense = require('uglify-save-license');
const ngAnnotate = require('gulp-ng-annotate');
const replace = require('gulp-replace');

const conf = require('../conf/gulp.conf');

gulp.task('fonts', fonts);
gulp.task('build', build);

function build() {
  const htmlFilter = filter(conf.path.tmp('*.html'), {restore: true});
  const jsFilter = filter(conf.path.tmp('**/*.js'), {restore: true});
  const cssFilter = filter(conf.path.tmp('**/*.css'), {restore: true});

  fonts();

  return gulp.src(conf.path.tmp('/index.html'))
    .pipe(useref({}, lazypipe().pipe(sourcemaps.init, {loadMaps: true})))
    .pipe(jsFilter)
    .pipe(ngAnnotate())
    // .pipe(replace('jspm_packages/github/twbs/bootstrap@3.3.7/dist/fonts/', './fonts/'))
    .pipe(replace('jspm_packages/github/twbs/bootstrap@3.3.7/dist/fonts/', './pizza-app/fonts/')) // fix for github pages from docs/
    .pipe(uglify({preserveComments: uglifySaveLicense})).on('error', conf.errorHandler('Uglify'))
    .pipe(rev())
    .pipe(jsFilter.restore)
    .pipe(cssFilter)
    .pipe(cssnano())
    .pipe(rev())
    .pipe(cssFilter.restore)
    .pipe(revReplace())
    .pipe(sourcemaps.write('maps'))
    .pipe(htmlFilter)
    .pipe(htmlmin())
    .pipe(htmlFilter.restore)
    .pipe(gulp.dest(conf.path.dist()));
}

function fonts() {
  return gulp.src('jspm_packages/github/twbs/bootstrap@3.3.7/fonts/*.*')
    .pipe(filter('**/*.{eot,otf,svg,ttf,woff,woff2}'))
    .pipe(gulp.dest('dist/fonts/'));
}
