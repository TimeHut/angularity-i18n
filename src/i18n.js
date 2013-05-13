'use strict';

angular.module('angularity-i18n', []);

angular.module('angularity-i18n', [])
.factory('i18nEntry', function(){
    var dict;
    return {
        set : function(v) { dict = v },
        get : function() { return dict }
    }
})
.filter('i18n', function(i18nEntry) {
	return function(str) {
        var offset = 1;
        var _locales = i18nEntry.get();
        var entry = _locales[str];

        if (angular.isString(entry)){
            str = entry;

        } else {
           if (arguments[1] && arguments[1] === 'plural') {
               var plural = arguments[2] 
               offset = 2;
               str = entry[plural] || entry['other'] || str;
           }
        }

		for (var i = offset; i < arguments.length; i++) {
			str = str.split('%' + (i - offset + 1)).join(arguments[i]);
		}

		return str;
	}
})
