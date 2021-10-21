$(document).ready(function () {
  // copy name of color
  $("body").on("click", ".parent-code .copy", function () {
    // Code
    $(this).select();
    document.execCommand("copy");
  });
});


