(function($){

	$.fn.savetheorphans = function(options) {  

		var defaults = {  
			orphansToSave: 1
		};  

		var options = $.extend(defaults, options); 

		return this.each(function() {
			var obj = $(this);  
			var str = obj.html();
			for (var i = 0; i < options.orphansToSave; i++) {
				str = str.replace(/( )([^ ]*)$/,'&nbsp;$2');
			};
			obj.html(str);
		});

	};

})(jQuery); 