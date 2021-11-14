$(document).ready(function () {
  // copy name of color
  $("body").on("click", ".parent-code .copy", function () {
    // Code
    $(this).select();
    document.execCommand("copy");
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
