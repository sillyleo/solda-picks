$(document).ready(function(){

  $("div.b-lazy").lazyload({
      effect : "fadeIn",
      container: $(".mdl-grid.main-content")
  });
	$(window).scroll();

});