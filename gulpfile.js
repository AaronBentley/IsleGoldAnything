const browserify = require('browserify')
const gulp = require('gulp')
const haml = require('gulp-haml')
const sass = require('gulp-sass')
const typescript = require('gulp-typescript')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')
const webserver = require('gulp-webserver')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const sourcemaps = require('gulp-sourcemaps')
const gutil = require('gulp-util')
const ghpages = require('gulp-gh-pages')

// Default task
gulp.task('default', ['message', 'copy-node-packages', 'haml', 'sass', 'javascript', 'imageMin', 'watch', 'webserver'])

// Copy modules from /node_modules/
gulp.task('copy-node-packages', () => {
    let assets = [
        './node_modules/jquery/**',
        './node_modules/popper.js/**',
        './node_modules/bootstrap/**',
        './node_modules/jquery.easing/**',
        './node_modules/scrollreveal/**',
        './node_modules/magnific-popup/**',
        '!./node_modules/magnific-popup/website/**',
        './node_modules/font-awesome/**',
        './node_modules/spectragram/**'
    ]

    assets.forEach(asset => {
        gulp.src(asset, {
            base: './node_modules/'
        }).pipe(gulp.dest('./dist/lib/'))
    })
})

// Watch source files for changes
gulp.task('watch', () => {
    gulp.watch('./src/haml/*.haml', ['haml'])
    gulp.watch('./src/scss/*.scss', ['sass'])
    gulp.watch('./src/js/*.js', ['javascript'])
    gulp.watch('./src/img/*', ['imageMin'])
})

// Log message
gulp.task('message', () => {
    console.log('Gulp is running...')
})

// Compile .haml
gulp.task('haml', () => {
    gulp
        .src('./src/haml/*.haml')
        // .pipe(haml().on('error', haml.logError))
        .pipe(haml())
        .pipe(gulp.dest('./dist/'))
})

// Compile .scss
gulp.task('sass', () => {
    gulp
        .src('./src/scss/*.scss')
        .pipe(
            sass({
                includePaths: [
                    'node_modules/bootstrap/scss'
                ]
            }).on('error', sass.logError)
        )
        .pipe(gulp.dest('./dist/css'))
})

// Compile .js
gulp.task('javascript', () => {
    // set up the browserify instance on a task basis
    var b = browserify({
        entries: './src/js/app.js',
        transform: ['babelify'],
        debug: true
    })

    return (
        b
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/js/'))
    )
})

// Optimize images
gulp.task('imageMin', () =>
    gulp
    .src('src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img/'))
)

// Launch webserver
gulp.task('webserver', () => {
    gulp.src('./dist').pipe(
        webserver({
            livereload: true,
            directoryListing: false,
            open: true
        })
    )
})

// Deploy to gh-pages
gulp.task('deploy', () => {
    gulp.src('./dist/**/*')
        .pipe(ghpages())
})