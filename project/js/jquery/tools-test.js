/*jslint plusplus: true, evil: true */
// jslint plusplus: true for error for ++
// evil: true for error document.write
/*global console , alert , prompt , $ , document, write, ADSAFE, report, jslint, bitwise, node*/
/*property charAt, slicexs*/
/*jslint browser: true */
/*global window */
// 1 - button reload
// 2 - button go back
// 3 - button xxl
// 4 - button Lg
// 5 - button Sm
// 6 - button Xm
// 7 - input Font
// function to add button reload page

// $(function () {
//   "use strict";
//   $("body").append(
//     "<button class='reload-page' title='Reload This Page'><i class='fas fa-sync-alt'></i> </button>"
//   );
//   $(".reload-page").css({
//     color: "#fff",
//     backgroundColor: "#bb2d3b",
//     border: "3px solid #333",
//     borderRadius: "10px",
//     padding: "5px 10px",
//     position: "fixed",
//     bottom: "45px",
//     right: "0",
//   });
//   $(".reload-page").on("click", function () {
//     window.location.reload();
//   });
// });

// // window go back
// $(function () {
//   ("use strict");
//   $("body").append(
//     "<a class='history-back' id='history-back' title='Back'><i class='fas fa-arrow-left'></i> </a>"
//   );
//   $(".history-back").css({
//     color: "#fff",
//     backgroundColor: "#bb2d3b",
//     border: "3px solid #333",
//     borderRadius: "10px",
//     padding: "5px 10px",
//     position: "fixed",
//     textAlign: "center",
//     bottom: "45px",
//     right: "45px",
//     cursor: "pointer",
//     fontSize: "16px",
//   });
//   // a(href='javascript:history.go()') go

//   // explain  History:

//   // a(href='#') go

//   var ElementName = document.getElementById("history-back");

//   ElementName.onclick = function () {
//     "use strict";

//     window.history.go(-1);
//   };
//   var btn = $(".history-back");
//   $(".history-back").href = "javascript:history.go(-1)";
// });

// // function to open window xxl
// $(function () {
//   "use strict";
//   $("body").append(
//     "<button class='window-xxl' title='1400 To Top'>xxl</button>"
//   );
//   $(".window-xxl").css({
//     color: "#fff",
//     backgroundColor: "#bb2d3b",
//     border: "3px solid #333",
//     borderRadius: "10px",
//     padding: "5px 10px",
//     position: "fixed",
//     bottom: "45px",
//     right: "88px",
//   });
//   $(".window-xxl").on("click", function () {
//     var windowHref = window.location.href;
//     window.open(
//       windowHref,
//       "_blank",
//       "width=1400,height=1080,menubar=no,status=no",
//       "true"
//     );
//   });
// });

// // function to open window Lg
// $(function () {
//   "use strict";
//   $("body").append(
//     "<button class='window-lg' title='From 1200 To Top'>Lg</button>"
//   );
//   $(".window-lg").css({
//     color: "#fff",
//     backgroundColor: "#bb2d3b",
//     border: "3px solid #333",
//     borderRadius: "10px",
//     padding: "5px 10px",
//     position: "fixed",
//     bottom: "45px",
//     right: "135px",
//   });
//   $(".window-lg").on("click", function () {
//     var windowHref = window.location.href;
//     window.open(
//       windowHref,
//       "_blank",
//       "width=1200,height=1080,menubar=no,status=no",
//       "true"
//     );
//   });
// });

// // function to open window md
// $(function () {
//   "use strict";
//   $("body").append(
//     "<button class='window-md' title='From 992 To Top'>Md</button>"
//   );
//   $(".window-md").css({
//     color: "#fff",
//     backgroundColor: "#bb2d3b",
//     border: "3px solid #333",
//     borderRadius: "10px",
//     padding: "5px 10px",
//     position: "fixed",
//     bottom: "45px",
//     right: "180px",
//   });
//   $(".window-md").on("click", function () {
//     var windowHref = window.location.href;
//     window.open(
//       windowHref,
//       "_blank",
//       "width=992,height=1080,menubar=no,status=no",
//       "true"
//     );
//   });
// });

// // function to open window sm
// $(function () {
//   "use strict";
//   $("body").append(
//     "<button class='window-sm'  title='From 768 To Top'>Sm</button>"
//   );
//   $(".window-sm").css({
//     color: "#fff",
//     backgroundColor: "#bb2d3b",
//     border: "3px solid #333",
//     borderRadius: "10px",
//     padding: "5px 8px",
//     position: "fixed",
//     bottom: "45px",
//     right: "230px",
//   });
//   $(".window-sm").on("click", function () {
//     var windowHref = window.location.href;
//     window.open(
//       windowHref,
//       "_blank",
//       "width=768,height=1080,menubar=no,status=no",
//       "true"
//     );
//   });
// });

// // function to font Ar
// $(function () {
//   "use strict";
//   var fontAr = document.createElement("link");
//   fontAr.href =
//     "https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700&family=Changa:wght@200;300;400;500;600;700;800&family=El+Messiri:wght@400;500;600;700&family=Lateef&family=Markazi+Text:wght@400;500;600;700&family=Mirza:wght@400;500;600;700&family=Scheherazade:wght@400;700&family=Short+Stack&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap";
//   document.getElementsByTagName("head")[0].appendChild(fontAr);

//   $("body").append(
//     "<input list='fontAr' class='fontAr' placeholder='set font Ar'>"
//   );
//   $("body").append("<datalist id='fontAr'></datalist>");
//   $("datalist#fontAr").append("<option value='Cairo, sans-serif'></option>");
//   $("datalist#fontAr").append("<option value='DroidKufi-regular'></option>");
//   $("datalist#fontAr").append("<option value='Droid Arabic Kufi'></option>");
//   $("datalist#fontAr").append("<option value='Short Stack, cursive'></option>");
//   $("datalist#fontAr").append("<option value='Tajawal, sans-serif'></option>");
//   $("datalist#fontAr").append("<option value='Markazi Text, serif'></option>");
//   $("datalist#fontAr").append(
//     "<option value='El Messiri, sans-serif'></option>"
//   );
//   $("datalist#fontAr").append("<option value='Changa, sans-serif'></option>");
//   $("datalist#fontAr").append("<option value='Mirza, cursive'></option>");
//   $("datalist#fontAr").append("<option value='Lateef, cursive'></option>");
//   $("datalist#fontAr").append("<option value='Scheherazade, serif'></option>");
//   // input
//   $(".fontAr").css({
//     width: "137px",
//     height: "40px",
//     fontSize: "13px",
//     border: "3px solid #333",
//     borderRadius: "10px",
//     padding: "5px 5px",
//     position: "fixed",
//     bottom: "0px",
//     right: "40px",
//   });
//   $("body").append("<button class='fontArBtn'>Font</button>");
//   // btn font
//   $(".fontArBtn").css({
//     backgroundColor: "#bb2d3b",
//     fontSize: "13px",
//     color: "#fff",
//     border: "3px solid #333",
//     borderRadius: "10px",
//     padding: "8px 5px",
//     position: "fixed",
//     bottom: "0px",
//     right: "0px",
//   });
//   $(".fontArBtn").on("click", function () {
//     var setColorVideo14input1 = $(".fontAr").val();
//     $("body").css("fontFamily", setColorVideo14input1);
//   });
// });

// $(".Element-Parent")
//   .find($(".btnTest:contains('go')"))
//   .css({ backgroundColor: "#333" });

// // function Scroll To
// $(function () {
//   "use strict";
//   $("body").append(
//     "<input type='text' class='offsetTo' placeholder='Scroll To'>"
//   );
//   // Input Style Css
//   $(".offsetTo").css({
//     width: "137px",
//     height: "40px",
//     fontSize: "13px",
//     border: "3px solid #333",
//     borderRadius: "10px",
//     padding: "5px 5px",
//     position: "fixed",
//     bottom: "0px",
//     left: "0",
//     textAlign: "left",
//   });
//   $("body").on("change", ".offsetTo", function () {
//     // code
//     var inputVal = $(".offsetTo").val();
//     $(window).scrollTop(inputVal);
//   });
// });

// // ***************************/

// // function Unicode Keyboard
// $(function () {
//   "use strict";
//   $("body").append(
//     "<input type='text' class='unicode' placeholder='Unicode Keyboard'>"
//   );
//   // Input Style Css
//   $(".unicode").css({
//     width: "137px",
//     height: "40px",
//     fontSize: "13px",
//     border: "3px solid #333",
//     borderRadius: "10px",
//     padding: "5px 5px",
//     position: "fixed",
//     bottom: "0px",
//     left: "140px",
//     textAlign: "left",
//   });
//   $("body").append("<div class='output-unicode'></div>");
//   // Div Style Css
//   $(".output-unicode").css({
//     width: "137px",
//     height: "40px",
//     lineHeight: "30px",
//     fontSize: "20px",
//     border: "3px solid #333",
//     borderRadius: "10px",
//     padding: "5px 5px",
//     position: "fixed",
//     bottom: "0px",
//     left: "280px",
//     textAlign: "center",
//   });
//   $("body").on("keyup", ".unicode", function (event) {
//     // code
//     var keyboardKey = event.keyCode || event.which;
//     $(".output-unicode").html(keyboardKey);
//   });
// });
