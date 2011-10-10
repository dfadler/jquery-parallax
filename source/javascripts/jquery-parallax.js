(function($){
	
	'use strict';
	
	$.fn.parallax = function(options){
		
		var $this = this,
			offset = $this.offset(),
			origin = parseInt($this.css('top')),
			opts = $.extend({}, $.fn.parallax.defaults, options),
			newCoord = null,
			windowTop = $(window).scrollTop();

		$this
			.css({
				'top': origin
			});
		
		return this.each(function(){
			$(window).bind('scroll', function() {
                windowTop = $(window).scrollTop();
                if((windowTop >= 0) && (windowTop <= offset.top + $('body').height())) {
                    newCoord = windowTop * opts.speed;
                    $this
						.css({
                        	'top': origin + newCoord + "px"
                    	});
                }
            });
		});
	}

// Parallax default options
	$.fn.parallax.defaults = {
		'speed': 0.95
	};

})(jQuery);