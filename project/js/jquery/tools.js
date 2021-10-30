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
