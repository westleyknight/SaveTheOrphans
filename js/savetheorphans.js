(function($){

	$.fn.savetheorphans = function(options) {  

		var defaults = {  
			orphansToSave: 1
		};  

		var options = $.extend(defaults, options); 

		return this.each(function() {
			var obj = $(this);  
			var str = obj.html();
			var htmlRegEx = /( )(<[^<]+?>.+<\/[^<]+>)/;
			for (var i = 0; i < options.orphansToSave; i++) {
				if (htmlRegEx.test(str)) {
					// Because the last word is an HTML tag put the &nbsp; in before it else the tag will break
					str = str.replace(htmlRegEx, '&nbsp;$2');
				} else {
					str = str.replace(/( )([^ ]*)$/,'&nbsp;$2');
				}
			};
			obj.html(str);
		});

	};

})(jQuery); 