
$( document ).ready(function() {
	
	//smooth scroll
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
	//smooth scroll
	
	// burger
$( ".burger_container img" ).click(function() {
  $( ".menu" ).stop().slideToggle('2000', "swing", function ()  {
    // Animation complete.
  });
});	
	// burger



});

