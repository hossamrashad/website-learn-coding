// = انشاء المشروع
// = mkdir Project-Name

// = هو قالب المشروع بتاعك اللى بيكون فية كل معلومات
// = npm init

// = تنزيل الجالب جلوبال فى النظام
// = npm i gulp -g

// = تنزيل الجالب فى المشروع
// = npm i --save-dev gulp

// = Make Folder => dist & project
// = Make File => gulpfile.js
// = Inside gulpfile.js

// = var gulp = require("gulp");

// ++ بلاجان لدامج الملفات
// -- npm install --save-dev gulp-concat
// =  var concat = require("gulp-concat");
// = اسم الملف اللى هيجمع فية الملفات
// = .pipe(concat("main.css"))

// -- هى خاصة بى البرفكسار الخاصة للمتصفحات فى خواص الس اس 3
// = npm install --save-dev gulp-autoprefixer
// ++ var autoprefixer = require("gulp-autoprefixer");
// = فى التاسك بتاع السى اس اس
// ++ .pipe(autoprefixer("last 20 versions"))

// -- بلاجان خاص بى تشغيل الساس
// = npm install sass gulp-sass --save-dev
// -- var sass = require("gulp-sass")(require("sass"));
//  فى تاسك السي اس اس
// = .pipe(sass({ outputStyle: "compressed" }))

// -- تنزيل الجالب
// = npm i gulp-pug
// = var pug = require("gulp-pug");
// ++ فى تاسك الاتش تى ال ام
// -- .pipe(pug({ pretty: true }))

// -- لوكال سايرفار
// = npm i static-server -save
// -- بتنشاء ملاف بى اسم server.js
// -- فى ملاف الواتش
// = require("./server.js");

// -- اضافة الليف رايلود
// = npm install --save-dev gulp-livereload
// = livereload = require('gulp-livereload');
// -- فى التاسك اللى هيتعمل للصفحة ريلود كل ما تسيف و فى الغالب جميع التسكات
// -- .pipe(livereload());
// -- فى تاسك الواتش
// = livereload.listen();
// = فى ملاف الباج اللى هيجمع جميع الصفحات اللى هو الانداكس
// = script(src="http://localhost:35729/livereload.js")

// --اضافة خاصة بى الماب فى تاسك السي اس اس علشان تعملك خريطة للملف اللى مكتوب فية
// = npm i gulp-sourcemaps --save-dev
// = var sourcemaps = require("gulp-sourcemaps");
// -- فى تاسك الساس
// = .pipe(sourcemaps.init())
// = .pipe(sourcemaps.write("."))

// -- اضافه بتضغاط ملاف الجافا اسكربت
// = npm install --save-dev gulp-uglify
// -- var uglify = require("gulp-uglify");
// -- فى تاسك الجافا اسكرابت
// ++ .pipe(uglify())

// -- اضافة تنبية بى انو التاسك خالص
// = npm i gulp-notify --save-dev
//-- var notify = require("gulp-notify");
// -- فى جميع التاسكات
// ++ .pipe(notify("Libs Css Task Is Done"));

// -- اضافة لعمال المشروع مضغوط
// = npm install --save-dev gulp-zip
// = بتنشالها تاسك لوحدها

// -- اضافة خاصة بى ضغط الصوار
// = npm install --save-dev gulp-imagemin
var gulp = require("gulp");
var changed = require("gulp-changed");
var concat = require("gulp-concat");
var autoprefixer = require("gulp-autoprefixer");
var sass = require("gulp-sass")(require("sass"));
var pug = require("gulp-pug");
var livereload = require("gulp-livereload");
var sourcemaps = require("gulp-sourcemaps");
var uglify = require("gulp-uglify");
var notify = require("gulp-notify");
var zip = require("gulp-zip");
var ftp = require("vinyl-ftp");

// var babel = require("gulp-babel");
// var browserify = require("browserify");
// var babelify = require("babelify");
// var source = require("vinyl-source-stream");
// npm i browserify
// Images
// var imagemin = require("imagemin");
// var imagemin = require("gulp-imagemin");
// import imagemin from "gulp-imagemin";
// var imageminPngquant = require("imagemin-pngquant");
// var webp = require("gulp-webp");
// var smushit = require("gulp-smushit");

// =============================== Task Html =============================== //
gulp.task("html", function () {
  return gulp
    .src("project/pug/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("dist"))
    .pipe(livereload())
    .pipe(notify("Html Task Is Done"));
});

// =============================== Task Scss =============================== //
gulp.task("scss", function () {
  return gulp
    .src("project/scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer("last 20 versions"))
    .pipe(concat("style.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(livereload())
    .pipe(notify("Scss Task Is Done"));
});

// ============================== Task Jquery ============================== //
gulp.task("jquery", function () {
  return gulp
    .src("project/js/jquery/*.*")
    .pipe(concat("jquery.js"))
    .pipe(gulp.dest("dist/js/jquery"))
    .pipe(uglify())
    .pipe(livereload())
    .pipe(notify("jquery Task Is Done"));
});

// ============================= Task js ================================= //
gulp.task("js", function () {
  return gulp
    .src("project/js/js/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(concat("js.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/js/js"))
    .pipe(notify("Js Task Is Done"))
    .pipe(livereload());
});

// ============================= Task Es6 =============================== //
gulp.task("es6", function () {
  return (
    gulp
      .src("project/js/es6/**/*.js")
      .pipe(sourcemaps.init())
      // .pipe(babel({ presets: ["@babel/env"] }))
      .pipe(concat("es6.js"))
      .pipe(uglify())
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest("dist/js/es6"))
      .pipe(notify("ES6 Task Is Done"))
      .pipe(livereload())
  );
});

// ============================= Task vue ================================= //
gulp.task("vue", function () {
  return gulp
    .src("project/js/vue/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(concat("vue-app.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/js/vue"))
    .pipe(notify("Vue App Task Is Done"))
    .pipe(livereload());
});

// =============================== Task react =============================== //
gulp.task("react", function () {
  return gulp
    .src("project/js/react/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(concat("react-app.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/js/react"))
    .pipe(notify("React App Task Is Done"))
    .pipe(livereload());
});

// ============================== Libs Css Task ================================ //
gulp.task("libs-css", function () {
  return gulp
    .src("project/libs-css/**/*")
    .pipe(gulp.dest("dist/css/libs"))
    .pipe(livereload())
    .pipe(notify("Libs Css Task Is Done"));
});

// =========================== Libs Js Task =================================== //
gulp.task("libs-js", function () {
  return gulp
    .src("project/libs-js/**/*.*")
    .pipe(gulp.dest("dist/js/libs"))
    .pipe(livereload())
    .pipe(notify("Libs Js Task Is Done"));
});

// =========================== Task For Learn Scss ============================ //
// --------------------------- Task For Learn Scss ---------------------------- //
gulp.task("scss-js", function () {
  return (
    gulp
      .src("project/js/scss/**/*.js")
      .pipe(sourcemaps.init())
      // .pipe(babel({ presets: ["@babel/env"] }))
      .pipe(concat("scss.js"))
      .pipe(uglify())
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest("dist/js/scss"))
      .pipe(notify("Js Scss Task Is Done"))
      .pipe(livereload())
  );
});
gulp.task("scss-css", function () {
  return gulp
    .src("project/scss/scss.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer("last 20 versions"))
    .pipe(concat("scss.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(livereload())
    .pipe(notify("Scss Task Is Done"));
});

// =========================== Task For Learn gulp ============================ //
// --------------------------- Task For Learn gulp ---------------------------- //
gulp.task("gulp-js", function () {
  return (
    gulp
      .src("project/js/gulp/**/*.js")
      .pipe(sourcemaps.init())
      // .pipe(babel({ presets: ["@babel/env"] }))
      .pipe(concat("gulp.js"))
      .pipe(uglify())
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest("dist/js/gulp"))
      .pipe(notify("Js gulp Task Is Done"))
      .pipe(livereload())
  );
});
gulp.task("gulp-css", function () {
  return gulp
    .src("project/scss/gulp.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer("last 20 versions"))
    .pipe(concat("gulp.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(livereload())
    .pipe(notify("gulp Task Is Done"));
});
// =========================== Task For Learn command line ============================ //
// --------------------------- Task For Learn command line ---------------------------- //
gulp.task("command-line-js", function () {
  return (
    gulp
      .src("project/js/command-line/**/*.js")
      .pipe(sourcemaps.init())
      // .pipe(babel({ presets: ["@babel/env"] }))
      .pipe(concat("command-line.js"))
      .pipe(uglify())
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest("dist/js/command-line"))
      .pipe(notify("Js command-line Task Is Done"))
      .pipe(livereload())
  );
});
gulp.task("command-line-css", function () {
  return gulp
    .src("project/scss/command-line.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer("last 20 versions"))
    .pipe(concat("command-line.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(livereload())
    .pipe(notify("command-line Task Is Done"));
});
// =========================== Task For Learn github ============================ //
// --------------------------- Task For Learn github ---------------------------- //
gulp.task("github-js", function () {
  return (
    gulp
      .src("project/js/github/**/*.js")
      .pipe(sourcemaps.init())
      // .pipe(babel({ presets: ["@babel/env"] }))
      .pipe(concat("github.js"))
      .pipe(uglify())
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest("dist/js/github"))
      .pipe(notify("Js github Task Is Done"))
      .pipe(livereload())
  );
});
gulp.task("github-css", function () {
  return gulp
    .src("project/scss/github.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer("last 20 versions"))
    .pipe(concat("github.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(livereload())
    .pipe(notify("github Task Is Done"));
});

// =========================== Task For Learn github ============================ //
// --------------------------- Task For Learn github ---------------------------- //
gulp.task("css-js", function () {
  return (
    gulp
      .src("project/js/css/**/*.js")
      .pipe(sourcemaps.init())
      // .pipe(babel({ presets: ["@babel/env"] }))
      .pipe(concat("css.js"))
      .pipe(uglify())
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest("dist/js/css"))
      .pipe(notify("Js css Task Is Done"))
      .pipe(livereload())
  );
});
gulp.task("css-css", function () {
  return gulp
    .src("project/scss/css.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer("last 20 versions"))
    .pipe(concat("css.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(livereload())
    .pipe(notify("Css Task Is Done"));
});

// =========================== Test Task ===================================== //

gulp.task("scss-test", function () {
  return gulp
    .src("project/scss/test.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer("last 20 versions"))
    .pipe(concat("test.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(livereload())
    .pipe(notify("Scss Task Is Done"));
});
// ============================== Images Task ================================ //
gulp.task("compressImages", function () {
  return (
    gulp
      .src("project/images/**/*")
      // .pipe(imagemin({ progressive: true }))
      .pipe(gulp.dest("dist/images"))
  );
});

// =============================== Zip Compress Files =============================== //
gulp.task("compress", function () {
  return gulp
    .src("dist/**/*.*")
    .pipe(zip("Finance-Company.zip"))
    .pipe(gulp.dest("."))
    .pipe(notify("Files Is Compressed To Zip "));
});

// ============================================================== //

// Upload Design With Ftp
// host: "mywebsite.tld", اسم الموقع || hossam.net
// user: "me", اليوسار نيم بتاع الاستضافة
// password: "mypass", الباسوارد
// parallel: 10, عدد الفيلات اللى بتترفع فى نفس الحظه
// .src(["output/**/*.*"] مسار الملفات اللى هتترفع من على جهازك
// .pipe(conn.newer("/htdocs")) مسار الملف اللى كل ما تحدث فية يرفع الملفات اللى جواه
//
//

gulp.task("deploy", function () {
  var conn = ftp.create({
    host: "ftpupload.net",
    user: "epiz_29431807",
    password: "vz5QI9xYpD",
    parallel: 10,
  });

  return (
    gulp
      .src(["dist/**/*.*"], { base: ".", buffer: false })
      // .pipe(conn.newer("/public_html"))
      // .pipe(conn.newer("/htdocs/output"))
      .pipe(conn.newer("/htdocs"))
      //   .pipe(conn.dest("/public_html"))
      // .pipe(conn.dest("/htdocs/output"))
      .pipe(conn.dest("/htdocs"))

      .pipe(livereload())
      .pipe(notify("Files Is Upload To Host "))
  );
});

// ============================ Task watch ================================== //
gulp.task("watch", function () {
  require("./server.js");
  livereload.listen();
  // = Html
  gulp.watch("project/pug/**/*.pug", gulp.series("html"));
  // = Css
  gulp.watch("project/scss/**/*.scss", gulp.series("scss"));
  gulp.watch("project/libs-css/**/*", gulp.series("libs-css"));
  // = Javascript
  gulp.watch("project/libs-js/**/*", gulp.series("libs-js"));
  gulp.watch("project/js/js/**/*.js", gulp.series("js"));
  gulp.watch("project/js/jquery/*.*", gulp.series("jquery"));
  gulp.watch("project/js/es6/**/*.js", gulp.series("es6"));
  gulp.watch("project/js/vue/**/*.js", gulp.series("vue"));
  gulp.watch("project/js/react/**/*.js", gulp.series("react"));
  // = Learn Scss
  gulp.watch("project/scss/scss/*.scss", gulp.series("scss-css"));
  gulp.watch("project/js/scss/scss.js", gulp.series("scss-js"));
  // = Learn gulp
  gulp.watch("project/scss/gulp/*.scss", gulp.series("gulp-css"));
  gulp.watch("project/js/gulp/gulp.js", gulp.series("gulp-js"));
  // = Learn gulp
  gulp.watch("project/scss/css/*.scss", gulp.series("css-css"));
  gulp.watch("project/js/gulp/css.js", gulp.series("css-js"));
  // = Learn command line
  gulp.watch("project/scss/command-line.scss", gulp.series("command-line-css"));
  gulp.watch("project/js/command-line/**/*.js", gulp.series("command-line-js"));
  // = learn github
  gulp.watch("project/scss/github.scss", gulp.series("github-css"));
  gulp.watch("project/js/github/**/*.js", gulp.series("github-js"));
  //= Test
  gulp.watch("project/scss/test/*.scss", gulp.series("scss-test"));
  // = Images
  gulp.watch("project/images/**/*", gulp.series("compressImages"));
  // = Zip
  gulp.watch("dist/**/*.*", gulp.series("compress"));
  gulp.watch("dist/**/*.*", gulp.series("deploy"));
});
// = Default
// gulp.task("default", ["watch"]);
gulp.task("default", gulp.series("watch"));
