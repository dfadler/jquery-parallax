$(function() {
	
	"use strict";
	
	var $this = this,
		offset = []
	

		
		// $(element)[0].scrollHeight
		
	$(window)
		.bind('scroll', function(e, offset) {
			// console.log($('body')[0].scrollHeight, $('body').height(), );
			switch(e.type) {

				case 'scroll':
				

					$('#blue')
						.css({
							'top': (($('#blue').offset().top + $(window).scrollTop()) / 5)
						});
					$('#yellow')
						.css({
							'top': (($('#yellow').offset().top + $(window).scrollTop()) / 7)
						});
					$('#brown')
						.css({
							'top': $(window).scrollTop()
						});
					$('#grey')
						.css({
							'top': (($('#grey').offset().top + $(window).scrollTop()) / 11)
						});
					$('#black')
						.css({
							'top': (($('#black').offset().top + $(window).scrollTop()) / 13)
						});	
						
						console.log($('#brown').offset().top - $(window).scrollTop(), $('#brown').offset().top);
					
				default:				
					break;
			}
			
			
		});	
		
		//$('body')[0].scrollHeight - $(window).scrollTop()
console.log($('#brown').offset().top - $(window).scrollTop(), $('#brown').offset().top);
});