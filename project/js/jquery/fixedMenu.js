// = Function For Dir Fixed Menu
$(function() {
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

$(document).ready(function() {
    "use strict";
    var html = $(":root").attr("lang");
    var fixedMuneInnerWidth = $(".fixed-menu-options-body").innerWidth();
    var fixedMune = $(".fixed-menu-options-body");
    var iconFontAwesome = $(".fixed-menu-options-body i:first");
    if (html == "en") {
        $(iconFontAwesome).on("click", function() {
            "use strict";
            $(this).parent(fixedMune).toggleClass("is-visible-left");
            if ($(this).parent(fixedMune).hasClass("is-visible-left")) {
                $(this).parent(fixedMune).animate({
                        left: 0,
                    },
                    500
                );
            } else {
                $(this).parent(fixedMune).animate({
                        left: -fixedMuneInnerWidth,
                    },
                    500
                );
            }
        });
    }
    if (html == "ar") {
        $(iconFontAwesome).on("click", function() {
            "use strict";
            $(this).parent(fixedMune).toggleClass("is-visible-right");
            if ($(this).parent(fixedMune).hasClass("is-visible-right")) {
                $(this).parent(fixedMune).animate({
                        right: 0,
                    },
                    500
                );
            } else {
                $(this).parent(fixedMune).animate({
                        right: -fixedMuneInnerWidth,
                    },
                    500
                );
            }
        });
    }
});

$(document).ready(function() {
    "use strict";
    var html = $(":root").attr("lang");
    var fixedMuneInnerWidth = $(".fixed-menu-options-padding-body").innerWidth();
    var fixedMune = $(".fixed-menu-options-padding-body");
    var iconFontAwesome = $(".fixed-menu-options-padding-body i:first");
    if (html == "en") {
        $(iconFontAwesome).on("click", function() {
            "use strict";
            $(this).parent(fixedMune).toggleClass("is-visible-left");
            if ($(this).parent(fixedMune).hasClass("is-visible-left")) {
                $(this).parent(fixedMune).animate({
                        left: 0,
                    },
                    500
                );
                $("body").animate({
                        paddingLeft: fixedMuneInnerWidth,
                    },
                    500
                );
            } else {
                $(this).parent(fixedMune).animate({
                        left: -fixedMuneInnerWidth,
                    },
                    500
                );
                $("body").animate({
                        paddingLeft: 0,
                    },
                    500
                );
            }
        });
    }
    if (html == "ar") {
        $(iconFontAwesome).on("click", function() {
            "use strict";
            $(this).parent(fixedMune).toggleClass("is-visible-right");
            if ($(this).parent(fixedMune).hasClass("is-visible-right")) {
                $(this).parent(fixedMune).animate({
                        right: 0,
                    },
                    500
                );
            } else {
                $(this).parent(fixedMune).animate({
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
checkbox.addEventListener("change", function() {
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

$(function() {
    "use strict";
    // code
    $(".parent-jquery-change-color li").on("click", function() {
        $("body").attr("data-default-color", $(this).data("color"));
        $("body :header").addClass("skin-color");
        // $('.Element :header').css({color: '#ccc'});
    });
});

$(function() {
    "use strict";
    // code
    $(".parent-jquery-change-back li").on("click", function() {
        $("body").attr("data-default-back", $(this).data("back"));
        $("body :header").addClass("skin-back");
    });
});

// = Function To Font Ar
$(function() {
    "use strict";
    var fontAr = document.createElement("link");
    fontAr.href =
        "https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700&family=Changa:wght@200;300;400;500;600;700;800&family=El+Messiri:wght@400;500;600;700&family=Lateef&family=Markazi+Text:wght@400;500;600;700&family=Mirza:wght@400;500;600;700&family=Scheherazade:wght@400;700&family=Short+Stack&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap";
    document.getElementsByTagName("head")[0].appendChild(fontAr);
    $(".fontArOptions").on("change", function() {
        var setColorVideo14input1 = $(".fontArOptions").val();
        $("body").css("fontFamily", setColorVideo14input1);
        setTimeout(function() {
            "use strict";
            // Code
            $(".fontArOptions").val($(this).attr("placeholder"));
        }, 2000);
    });
});

// = Fixed Mune Right
$(document).ready(function() {
    "use strict";
    var html = $(":root").attr("lang");
    var fixedMuneInnerWidth = $(".fixed-right").innerWidth();
    // console.log(fixedMuneInnerWidth);
    var fixedMune = $(".fixed-right");
    var iconFontAwesome = $(".fixed-right i:first");
    if (html == "en") {
        $(iconFontAwesome).on("click", function() {
            "use strict";
            $(this).parent(fixedMune).toggleClass("is-visible-right");
            if ($(this).parent(fixedMune).hasClass("is-visible-right")) {
                $(this).parent(fixedMune).animate({
                        right: 0,
                    },
                    500
                );
            } else {
                $(this).parent(fixedMune).animate({
                        right: -fixedMuneInnerWidth,
                    },
                    500
                );
            }
        });
    }
    if (html == "ar") {
        $(iconFontAwesome).on("click", function() {
            "use strict";
            $(this).parent(fixedMune).toggleClass("is-visible-left");
            if ($(this).parent(fixedMune).hasClass("is-visible-left")) {
                $(this).parent(fixedMune).animate({
                        left: 0,
                    },
                    500
                );
            } else {
                $(this).parent(fixedMune).animate({
                        left: -fixedMuneInnerWidth,
                    },
                    500
                );
            }
        });
    }
});