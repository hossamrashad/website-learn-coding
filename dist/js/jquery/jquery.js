// = Function For Dir Fixed Menu
$(function () {
  // code
  "use strict";
  var html = $(":root").attr("lang");
  var fixedMuneInnerWidth = $(".fixed-menu-options-padding-body").innerWidth();
  var fixedMune = $(".fixed-menu-options-padding-body");

  if (html == "en") {
    $(fixedMune).css({
      left: -fixedMuneInnerWidth,
    });
    $(".fixed-menu-options-padding-body i:first").css({
      left: fixedMuneInnerWidth,
    });
  }
  if (html == "ar") {
    $(".fixed-menu-options-padding-body").css({
      right: -fixedMuneInnerWidth,
    });
    $(".fixed-menu-options-padding-body i:first").css({
      right: fixedMuneInnerWidth,
    });
  }
});

// = Fixed Menu icon Font Awesome

$(document).ready(function () {
  "use strict";
  var html = $(":root").attr("lang");
  var fixedMuneInnerWidth = $(".fixed-menu-options-body").innerWidth();
  var fixedMune = $(".fixed-menu-options-body");
  var iconFontAwesome = $(".fixed-menu-options-body i:first");
  if (html == "en") {
    $(iconFontAwesome).on("click", function () {
      "use strict";
      $(this).parent(fixedMune).toggleClass("is-visible-left");
      if ($(this).parent(fixedMune).hasClass("is-visible-left")) {
        $(this).parent(fixedMune).animate(
          {
            left: 0,
          },
          500
        );
      } else {
        $(this).parent(fixedMune).animate(
          {
            left: -fixedMuneInnerWidth,
          },
          500
        );
      }
    });
  }
  if (html == "ar") {
    $(iconFontAwesome).on("click", function () {
      "use strict";
      $(this).parent(fixedMune).toggleClass("is-visible-right");
      if ($(this).parent(fixedMune).hasClass("is-visible-right")) {
        $(this).parent(fixedMune).animate(
          {
            right: 0,
          },
          500
        );
      } else {
        $(this).parent(fixedMune).animate(
          {
            right: -fixedMuneInnerWidth,
          },
          500
        );
      }
    });
  }
});

$(document).ready(function () {
  "use strict";
  var html = $(":root").attr("lang");
  var fixedMuneInnerWidth = $(".fixed-menu-options-padding-body").innerWidth();
  var fixedMune = $(".fixed-menu-options-padding-body");
  var iconFontAwesome = $(".fixed-menu-options-padding-body i:first");
  if (html == "en") {
    $(iconFontAwesome).on("click", function () {
      "use strict";
      $(this).parent(fixedMune).toggleClass("is-visible-left");
      if ($(this).parent(fixedMune).hasClass("is-visible-left")) {
        $(this).parent(fixedMune).animate(
          {
            left: 0,
          },
          500
        );
        $("body").animate(
          {
            paddingLeft: fixedMuneInnerWidth,
          },
          500
        );
      } else {
        $(this).parent(fixedMune).animate(
          {
            left: -fixedMuneInnerWidth,
          },
          500
        );
        $("body").animate(
          {
            paddingLeft: 0,
          },
          500
        );
      }
    });
  }
  if (html == "ar") {
    $(iconFontAwesome).on("click", function () {
      "use strict";
      $(this).parent(fixedMune).toggleClass("is-visible-right");
      if ($(this).parent(fixedMune).hasClass("is-visible-right")) {
        $(this).parent(fixedMune).animate(
          {
            right: 0,
          },
          500
        );
      } else {
        $(this).parent(fixedMune).animate(
          {
            right: -fixedMuneInnerWidth,
          },
          500
        );
      }
    });
  }
});

// = Fixed Menu Options Web Site

// change all color & background color
var checkbox = document.querySelector("input[name=theme]");
checkbox.addEventListener("change", function () {
  if (this.checked) {
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    trans();
    document.documentElement.setAttribute("data-theme", "light");
  }
});
let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};

// = Function To Change Color

$(function () {
  "use strict";
  // code
  $(".parent-jquery-change-color li").on("click", function () {
    $("body").attr("data-default-color", $(this).data("color"));
    $("body :header").addClass("skin-color");
    // $('.Element :header').css({color: '#ccc'});
  });
});

$(function () {
  "use strict";
  // code
  $(".parent-jquery-change-back li").on("click", function () {
    $("body").attr("data-default-back", $(this).data("back"));
    $("body :header").addClass("skin-back");
  });
});

// = Function To Font Ar
$(function () {
  "use strict";
  var fontAr = document.createElement("link");
  fontAr.href =
    "https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700&family=Changa:wght@200;300;400;500;600;700;800&family=El+Messiri:wght@400;500;600;700&family=Lateef&family=Markazi+Text:wght@400;500;600;700&family=Mirza:wght@400;500;600;700&family=Scheherazade:wght@400;700&family=Short+Stack&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap";
  document.getElementsByTagName("head")[0].appendChild(fontAr);
  $(".fontArOptions").on("change", function () {
    var setColorVideo14input1 = $(".fontArOptions").val();
    $("body").css("fontFamily", setColorVideo14input1);
    setTimeout(function () {
      "use strict";
      // Code
      $(".fontArOptions").val($(this).attr("placeholder"));
    }, 2000);
  });
});

// = Fixed Mune Right
$(document).ready(function () {
  "use strict";
  var html = $(":root").attr("lang");
  var fixedMuneInnerWidth = $(".fixed-right").innerWidth();
  // console.log(fixedMuneInnerWidth);
  var fixedMune = $(".fixed-right");
  var iconFontAwesome = $(".fixed-right i:first");
  if (html == "en") {
    $(iconFontAwesome).on("click", function () {
      "use strict";
      $(this).parent(fixedMune).toggleClass("is-visible-right");
      if ($(this).parent(fixedMune).hasClass("is-visible-right")) {
        $(this).parent(fixedMune).animate(
          {
            right: 0,
          },
          500
        );
      } else {
        $(this).parent(fixedMune).animate(
          {
            right: -fixedMuneInnerWidth,
          },
          500
        );
      }
    });
  }
  if (html == "ar") {
    $(iconFontAwesome).on("click", function () {
      "use strict";
      $(this).parent(fixedMune).toggleClass("is-visible-left");
      if ($(this).parent(fixedMune).hasClass("is-visible-left")) {
        $(this).parent(fixedMune).animate(
          {
            left: 0,
          },
          500
        );
      } else {
        $(this).parent(fixedMune).animate(
          {
            left: -fixedMuneInnerWidth,
          },
          500
        );
      }
    });
  }
});

// input Lang
$(function () {
  // code
  "use strict";
  var html = $(":root").attr("lang");
  var fixedMuneInnerWidth = $(".fixed-menu-options-body").innerWidth();
  var fixedMune = $(".fixed-menu-options-body");

  if (html == "en") {
    $(fixedMune).css({
      left: -fixedMuneInnerWidth,
    });
    $(".fixed-menu-options-body i:first").css({
      left: fixedMuneInnerWidth,
    });
  }
  if (html == "ar") {
    $(".fixed-menu-options-body").css({
      right: -fixedMuneInnerWidth,
    });
    $(".fixed-menu-options-body i:first").css({
      right: fixedMuneInnerWidth,
    });
  }
});

// = Function Add * In Input Required
$(function () {
  // code
  $('<span class="asterisk">*</span>').insertBefore("input[required]");
  $(".asterisk").each(function () {
    $(this).css({
      position: "absolute",
      left: $(this).parent("div").find("input").innerWidth() - 40,
      top: $(this).parent("div").find("input").innerHeight() / 3,
      color: "#d24b4b",
      zIndex: 1,
      fontWeight: "bold",
      fontSize: 20,
    });
  });
});

// = Function Input Required
// = Function If Input Is Empty
$(function () {
  // code
  $("[required]").blur(function () {
    $(this)
      .next("div")
      .css({
        position: "absolute",
        left: $(this).parent("div").find("input").innerWidth() - 25,
        top: $(this).parent("div").find("input").innerHeight() / 3,
      });
    if ($(this).val() == "") {
      $(this).css({ border: "1px solid #d24b4b" });
      $(this)
        .next(".valid")
        .find(".unValid i.fa-times")
        .fadeIn()
        .delay(2000)
        .fadeOut();
    } else {
      $(this).css({ border: "1px solid #1abc9c" });
      $(this)
        .next(".valid")
        .find(".valid i.fa-check")
        .fadeIn()
        .delay(2000)
        .fadeOut();
    }
  });
});

// = Function Add Upload Icon
$(function () {
  // code
  $('<i class="fas fa-upload fa-1x skin-color upload-style"></i>').insertBefore(
    "input[type='file']"
  );
  $(".upload-style").each(function () {
    $(this).css({
      position: "absolute",
      left: $(this).parent("div").find("input").innerWidth() - 20,
      top: $(this).parent("div").find("input").innerHeight() / 3,
      zIndex: 3,
    });
  });
  // =
  $("input[type='file']").css({ zIndex: 2 });
  $("input[type='file'] .upload-style").hover(function () {
    // code
    $(this).css({ zIndex: 1 });
  });
});

// =  Input Direction
$(function () {
  "use strict";
  // add class to input
  $("input").on("keyup", function () {
    if ($(this).val().charCodeAt(0) < 200) {
      $(this).css("direction", "ltr");
    } else {
      $(this).css("direction", "rtl");
    }
  });
});

// =  Function Input Tag
$(function () {
  "use strict";
  $(".add-tag").parent().css({ flexDirection: "column", width: "100%" });
  $(".add-tag").css({ width: "100%" });
  // add class to input
  $("body").on("keyup", ".add-tag", function (event) {
    // code
    var keyboardKey = event.keyCode || event.which;
    // Coma Pressed
    if (keyboardKey === 188) {
      var thisValue = $(this).val().slice(0, -1);
      $(".tags").append(
        '<span class="tag-span"><i class="fa fa-times"></i>' +
          thisValue +
          "</span>"
      );
      $(this).val("");
    }
  });
  // Remove Tag On Click On Icon
  $(".tags").on("click", ".tag-span i", function () {
    $(this).parent(".tag-span").fadeOut(800);
  });
});

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

/*jslint plusplus: true, evil: true */
// jslint plusplus: true for error for ++
// evil: true for error document.write

/*global console , alert , prompt , $ , document, write, ADSAFE, report, jslint, bitwise, node*/

/*property charAt, slicexs*/

/*jslint browser: true */
/*global window */

/**
 *
 * Window Height
 *
 * -- .jq-window-height
 *
 * -- Window Height / 2
 *
 * -- fixed menu
 *
 * -- button scroll to top
 *
 * -- input direction
 *
 * -- font Ar
 *
 * -- nav = 1 - if have class fixed-top 2 - change color
 *
 * -- menu-Plus
 *
 * -- jq-box-read-more
 *
 * -- function for animated on scroll from top
 *
 */

// window height
$(function () {
  "use strict";
  // Window Height
  var windowH = $(window).height();

  $(".jq-window-height").height(windowH);

  $(window).resize(function () {
    $(".jq-window-height").height(windowH);
  });

  // Window Height / 2
  $(".jq-window-height-2").height(windowH / 2);

  $(window).resize(function () {
    $(".jq-window-height-2").height(windowH / 2);
  });
});

// menu-Plus
function openMenu() {
  "use strict";
  const menu = document.querySelector(".menu-Plus");

  menu.classList.toggle("open");
}

// jq-box-read-more
function readMore() {
  "use strict";
  var blur = document.getElementById("jq-box-read-more");
  blur.classList.toggle("activeShow");
  // Show Popup
  var popupReadMore = document.getElementById("css-popup-box-read-more");
  popupReadMore.classList.toggle("activeShow");
}

// loading
$(document).ready(function () {
  "use strict";

  // start section loading
  $(".loading .spinner").fadeOut(2000, function () {
    $(this)
      .parent()
      .fadeOut(2000, function () {
        $(this).remove();
      });
  });

  // start PRELOADER
  (function () {
    $(window).ready(function () {
      $("#preloader").fadeOut(3000);
    });
  })();

  // start section loading
  $(".loading-parent .loading-child").fadeOut(2000, function () {
    $(this)
      .parent()
      .fadeOut(2000, function () {
        $(this).remove();
      });
  });

  // start section loading 3
  $(".loading-parent-3 .loader-child").fadeOut(2000, function () {
    $(this)
      .parent()
      .fadeOut(2000, function () {
        $(this).remove();
      });
  });

  // start section loading 4
  $(".loading-parent-4 .loader-child").fadeOut(2000, function () {
    $(this)
      .parent()
      .fadeOut(2000, function () {
        $(this).remove();
      });
  });

  // start section loading 5
  $(".loading-parent-5 .loader-child").fadeOut(2000, function () {
    $(this)
      .parent()
      .fadeOut(2000, function () {
        $(this).remove();
      });
  });

  // navbar background color
  $(window).scroll(function () {
    $("nav").toggleClass("css-nav-scroll", $(this).scrollTop() > 100);
  });

  // dynamic tabs
  $(".tabs-list li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");

    //console.log($(this).data("content"));

    $(".content-list > div").hide();

    $($(this).data("content")).fadeIn();
  });

  // section box haver
  $(document).on(
    "mouseover",
    ".css-section-haver-box-parent .column",
    function () {
      "use strict";
      $(this).addClass("active").siblings().removeClass("active");
    }
  );
});

/********************************* Start Nav ****************************** */
// if nav have class "fixed-top"

$(function () {
  var nav = document.querySelector("nav");
  $(nav).each(function () {
    if ($(this).hasClass("fixed-top")) {
      var nextElementNav = nav.nextElementSibling;
      nextElementNav.style.marginTop = nav.clientHeight + "px";
    }
  });
});

// navbar change color
// if navbar have class jq-navbar-change-color
window.addEventListener("scroll", function () {
  var windowH = $(window).height();
  var nav = this.document.querySelector("nav");
  var windowPosition = this.window.scrollY > windowH;
  $(nav).each(function () {
    if (this.classList.contains("jq-navbar-change-color")) {
      nav.classList.toggle("css-nav-change-color", windowPosition);
    }
  });
});
/********************************* End Nav ********************************* */

/*********************************** Start Button  ************************** */

// btn One
// const btnHoverOne = document.querySelector(".css-btn-hover-one");
// btnHoverOne.onmousemove = function(e) {
//     const x = e.pageX - btnHoverOne.offsetLeft;
//     const y = e.pageY - btnHoverOne.offsetTop;
//     btnHoverOne.style.setProperty("--x", x + "px");
//     btnHoverOne.style.setProperty("--y", y + "px");
// };

/*********************************** End Button  ************************** */

/*************************** Start function animated  ********************* */

// function for animated on scroll from top

// $("#Element").addClass(".opacity0 ");

// window.addEventListener("scroll", function() {
//     var ElementOffSiteTop = document.querySelector("#Element");

//     // console.log("get" + ElementOffSiteTop.getBoundingClientRect().top);

//     // console.log(window.innerHeight);

//     var doWhatYouWant = ElementOffSiteTop.getBoundingClientRect().top;

//     if (doWhatYouWant < window.innerHeight) {
//         setTimeout(function() {
//             "use strict";
//             // Code
//             ElementOffSiteTop.classList.add("animated");
//             ElementOffSiteTop.classList.add("zoomIn");
//             ElementOffSiteTop.classList.remove("opacity0");
//         }, 1000);
//     } else {
//         setTimeout(function() {
//             // Code
//             ElementOffSiteTop.classList.remove("animated");
//             ElementOffSiteTop.classList.remove("zoomIn");
//             ElementOffSiteTop.classList.add("opacity0");
//         }, 1000);
//     }
// });

// = ***************************** End function animated  **********************

// = ***************************** Start Jquery Examples  **********************

// Function Body Padding Nav Height
$(function () {
  // code
  "use strict";
  $("body, .block").css({ paddingTop: $(".navbar").innerHeight() });
});

// Function Smooth Scroll To Element
// ul(class='jq-scroll-to-element')
//   li
//      a Home
//      a About
// div(id='Home')
// div(id='About')
$(function () {
  // code
  "use strict";
  var ulNav = document.querySelector("ul.navbar-nav");
  if (ulNav.classList.contains("jq-scroll-to-element")) {
    $("ul.navbar-nav li a").each(function () {
      // code
      if ($(this).parent("li").is(".nav-item")) {
        $($(this)).attr({
          "data-scroll": "#" + $($(this)).text().trim(),
        });
      }
    });
    $(this).on("click", "ul.navbar-nav li a", function (e) {
      // code
      e.preventDefault();
      $("html , body").animate(
        {
          scrollTop: $($(this).data("scroll")).offset().top + 1,
        },
        500
      );
      $(this)
        .addClass("active")
        .parent("li")
        .siblings()
        .find("a")
        .removeClass("active");
    });
    // Sync Navbar Links With Section
    $(window).scroll(function () {
      $(".block").each(function () {
        if ($(window).scrollTop() > $(this).offset().top - 58.26) {
          var blockID = $(this).attr("id");
          $(".navbar a").removeClass("active");
          $(".navbar li a[data-scroll='" + "#" + blockID + "']").addClass(
            "active"
          );
        }
      });
    });
  }
});

// Element Scroll To Top

$(function () {
  // code
  ("use strict");
  // create Element
  // var AScrollToTop = document.createElement("a");
  // var IFontAwesome = document.createElement("i");

  // Set Attribute
  // AScrollToTop.setAttribute("class", "scroll-to-top");
  // IFontAwesome.setAttribute("class", "fa fa-rocket fa-2x fa-fw");
  // AScrollToTop.setAttribute("id", "scroll-to-top-1");

  // Append New Element To Element
  // AScrollToTop.appendChild(IFontAwesome);

  // Append New Element To body
  // document.body.appendChild(AScrollToTop);

  // button scroll to top

  $(window).scroll(function () {
    var buttonScroll = $(".scroll-to-top");
    if ($(window).scrollTop() >= 500) {
      if (buttonScroll.is(":hidden")) {
        buttonScroll.fadeIn(400);
      }
    } else {
      buttonScroll.fadeOut(400);
    }
  });
  $(window).scroll(function () {
    var buttonScroll = $(".scroll-to-top-animate-1");
    if ($(window).scrollTop() >= 500) {
      if (buttonScroll.is(":hidden")) {
        buttonScroll.fadeIn(400);
      }
    } else {
      buttonScroll.fadeOut(400);
    }
  });

  $(".scroll-to-top").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
  $(".scroll-to-top-animate-1").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
});

// Popup
// span(class="btn-show-popup"  data-popup=".show-parent-popup") popup
// div(class='popup show-parent-popup')
//     div(class='inner')
//         p Lorem ipsum dolor sit amet consectetur adipisicing elit
//         i(class="fas fa-window-close close")

$(function () {
  // code
  ("use strict");
  $(document).ready(function () {
    "use strict";

    $(".btn-show-popup").click(function () {
      $($(this).data("popup")).fadeIn();
    });

    $(".popup").click(function () {
      $(this).fadeOut();
    });

    $(".popup .inner").click(function (e) {
      e.stopPropagation();
    });

    $(".popup .close").click(function (e) {
      e.preventDefault();

      $(this).parentsUntil(".popup").parent().fadeOut();
    });

    $(document).keydown(function (e) {
      if (e.keyCode == 27) {
        $(".popup").fadeOut();
      }
    });
  });
});

// Buttons With Effects

// div(class='buttons-effects')
//     button(class="buttons-effect jq-back-to-left")
//         span(class="") Back From Left
//     button(class="buttons-effect jq-back-to-top")
//         span(class="") Back From Top
//     button(class="buttons-effect jq-border-to-left")
//         span(class="") border From left
//     button(class="buttons-effect jq-border-to-top")
//         span(class="") border From Top
//     button(class="buttons-effect jq-bounce")

$(function () {
  // code
  "use strict";
  $(".buttons-effect").each(function () {
    $(this).prepend("<span></span>");
  });
  // Btn Effect Back From Left
  $(".jq-back-to-left ,.jq-border-to-left").hover(
    function () {
      // code
      $(this).find("span").eq(0).animate(
        {
          width: "100%",
        },
        300
      );
    },
    function () {
      // code
      $(this).find("span").eq(0).animate(
        {
          width: "0",
        },
        300
      );
    }
  );
  // Btn Effect Back From Top
  $(".jq-back-to-top, .jq-border-to-top").hover(
    function () {
      // code
      $(this).find("span").eq(0).animate(
        {
          height: "100%",
        },
        300
      );
    },
    function () {
      // code
      $(this).find("span").eq(0).animate(
        {
          height: "0",
        },
        300
      );
    }
  );
  // Btn Bounce
});

$(function () {
  // code
  function btnBounce(selector, times, distance, speed) {
    for (var i = 0; i < times; i++) {
      $(selector)
        .animate(
          {
            top: "-=" + distance,
          },
          speed
        )
        .animate(
          {
            top: "+=" + distance,
          },
          speed
        );
    }
  }
  // =
  $(".jq-bounce").on("click", function () {
    btnBounce($(this), 1, 20, 400);
  });
});

// Animated Progress
// div(class='animated-progress progress-red')
//     span(data-progress='30%' )
$(function () {
  // code
  ("use strict");
  $(".animated-progress span").each(function () {
    $(this).animate(
      {
        width: $(this).attr("data-progress"),
      },
      1000,
      function () {
        $(this)
          .text($(this).attr("data-progress"))
          .css({ textIndent: $(this).attr("data-progress") });
      }
    );
  });
});

// = Function Fixed Menu & I Padding Nav Height
$(function () {
  // code
  "use strict";
  $(".fixed-menu-options-body,.fixed-menu-options-body i:first").css({
    top: $(".navbar").innerHeight(),
  });
  $(
    ".fixed-menu-options-padding-body,.fixed-menu-options-padding-body i:first"
  ).css({
    top: $(".navbar").innerHeight(),
  });
});

// = Start Function Slider Gallery
$(function () {
  // code
  $(".thumbnails img").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".master-img")
      .fadeOut()
      .css({
        backgroundImage: "url(../../" + $(this).attr("src") + ")",
      })
      .fadeIn(500);

    $(".master-img span.right").css({
      backgroundImage:
        "url(../../" + $(".thumbnails .active").next().attr("src") + ")",
    });
    $(".master-img span.left").css({
      backgroundImage:
        "url(../../" + $(".thumbnails .active").prev().attr("src") + ")",
    });
  });

  // = For Lick Icon Click

  $(".gallery").each(function () {
    if ($(".thumbnails .active").is(":last-child")) {
      $(".master-img span.right").css({
        backgroundImage:
          "url(../../" + $(".thumbnails img:first").attr("src") + ")",
      });
    } else {
      $(".master-img span.right").css({
        backgroundImage:
          "url(../../" + $(".thumbnails img").next().attr("src") + ")",
      });
    }
  });

  $(".slider").each(function () {
    if ($(".thumbnails .active").is(":first-child")) {
      $(".master-img span.left").css({
        backgroundImage:
          "url(../../" + $(".thumbnails img:last").attr("src") + ")",
      });
    } else {
      $(".master-img span.left").css({
        backgroundImage:
          "url(../../" + $(".thumbnails .active").prev().attr("src") + ")",
      });
    }
  });

  $(".master-img span.left").on("click", function () {
    if ($(".thumbnails .active").is(":first-child")) {
      $(".thumbnails img:last").click();
    } else {
      $(".thumbnails .active").prev().click();
    }
  });
  $(".master-img span.right").on("click", function () {
    if ($(".thumbnails .active").is(":last-child")) {
      $(".thumbnails img").eq(0).click();
    } else {
      $(".thumbnails .active").next().click();
    }
  });
});

var numberOfThumbnails = $(".thumbnails").children().length;
var marginThumbnails = ".5";
var totalMarginThumbnails = (numberOfThumbnails - 1) * marginThumbnails;
var thumbnailsWidth = (100 - totalMarginThumbnails) / numberOfThumbnails;

$(function () {
  // code
  $(".thumbnails").css({
    gridTemplateColumns:
      "repeat(auto-fill, minmax(" + thumbnailsWidth + "%" + ", 1fr))",
    gap: "0px" + marginThumbnails + "%" + "",
  });
});
// = End Function Slider Gallery

// = Function Toggle Product Description
$(function () {
  // code
  "use strict";
  $(".toggle-products-description .product i").on("click", function () {
    $(this).toggleClass("fa-plus fa-minus").next("p.lead").slideToggle();
  });
});

// = Function Toggle Product Description Grid & List
$(function () {
  // code
  "use strict";
  $(".products .product i").on("click", function () {
    $(this).toggleClass("fa-plus fa-minus").next("p.lead").slideToggle();
  });
});

// = Function Hover Icon Grid View
$(function () {
  // code
  $(".view-options .icon-disc-word i").on("click", function () {
    $(this)
      .addClass("active")
      .parent("span")
      .siblings()
      .find("i")
      .removeClass("active");
    $(".products")
      .removeClass("products-grid-view products-list-view")
      .addClass($(this).data("class"));
  });
});
// = End Function Toggle Product Description Grid & List

// = Function Error Massage
$(function () {
  // code
  $(".error-massage").each(function () {
    $(this).animate({ right: 0 }, 1000, function () {
      $(this).delay(3000).animate(
        {
          right: "-50%",
        },
        1000
      );
    });
  });
});

// = Function Form Placeholder Blur Placeholder Fafe Out
$(function () {
  // code
  var placeholder = "";
  $("[placeholder]")
    .focus(function () {
      placeholder = $(this).attr("placeholder");
      $(this).attr("placeholder", "");
    })
    .blur(function () {
      $(this).attr("placeholder", placeholder);
    });
});

// = Function Trimmed Text
// $(function() {
//     // code
//     $(".trimmed-text p").each(function() {
//         if ($(this).text().length > 100) {
//             var trimmedText = $(this).text().substr(0, 100);
//             $(this).text(trimmedText);
//         }
//     });
// });

// = Function Dynamic Trimmed Text output 100 حرف
$(function () {
  // code
  function trimText(selector, maxLength) {
    $(selector).each(function () {
      if ($(this).text().length > maxLength) {
        var trimmedText = $(this).text().substr(0, maxLength);
        $(this).text(trimmedText + " ... ");
      }
    });
  }

  trimText(".trimmed-text p", 100);
});

// = Function Cards

$(function () {
  // code
  var zIndexValue = 0;
  $(".jq-cards .card").on("click", function () {
    $(this)
      .animate(
        {
          left: "20%",
          marginTop: 30,
        },
        400,
        function () {
          zIndexValue--;
          $(this).css({ zIndex: zIndexValue });
        }
      )
      .animate(
        {
          left: $(this).css("left"),
          marginTop: 0,
        },
        400
      );
  });
});

// = Function Fade Loop
$(function () {
  // code
  function fadeLoop() {
    $(".blink-warning").fadeOut(1000, function () {
      $(this).fadeIn(1000);
      fadeLoop();
    });
  }
  fadeLoop();
});

// = Function Add Task

$(function () {
  // code
  var newTask = $(".task-input");

  $(".add-task").on("submit", function (event) {
    event.preventDefault();
    if (newTask.val() != "") {
      $("<li class='li-task'>" + newTask.val() + "</li>").appendTo(".tasks");
      newTask.val("");
    }
  });
  $(".tasks").on("click", "li", function () {
    // code
    $(this)
      .css({})
      .delay(200)
      .fadeOut(400, function () {
        $(this).remove();
      });
  });
});

// $(function() {
//     // code
//     var test = $("ul.tasks *");
//     $(
//         '<span class="class"><i class="fas fa-times skin-color"></i></span>'
//     ).insertBefore(".hossam");
//     $(".class").each(function() {
//         $(this).css({
//             position: "absolute",
//             left: $(this).parent(".tasks").find("li").innerWidth() - 20,
//             top: $(this).parent("ul").find("li").innerHeight() / 3,
//             zIndex: 3,
//         });
//     });
// });

// = Function Form Placeholder Blur Placeholder Fafe Out
$(function () {
  // code
  // var placeholder = '<i class="fas fa-plus"></i>';

  $(".task-input").css({ textIndent: 50 });
});
