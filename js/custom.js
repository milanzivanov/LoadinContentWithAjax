let wrapper = $("#content_wrapper");
let link = $(".menu_top");

// loads first home page
$(document).ready(function() {
  wrapper.load($(".menu_top:first").attr("href"));
  // active link
  link.click(function() {
      link.removeClass("active");
      $(this).addClass("active");
  });
});

// loading content with ajax
link.on("click", function(e) {
  e.preventDefault();
  var href = $(this).attr("href");
  wrapper.hide().load(href).fadeIn("normal");
  // return false;
});
  