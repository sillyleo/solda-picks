$(document).ready(function(){

  $("div.mdl-card, .b-lazy").lazyload({
      effect : "fadeIn",
      container: $(".mdl-grid.main-content")
  });
	$(window).scroll();

});