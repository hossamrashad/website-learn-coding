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
