'use strict';

angular.module('angularity-i18n', []);

angular.module('angularity-i18n', [])
.factory('i18n', function($filter){
    var dict;
    var fn = function(){
        return $filter('i18n').apply(null, arguments) 
    }
    fn.set = function(v) { dict = v };
    fn.get = function() { return dict || {} }
    return fn;
})
.filter('i18n', function(i18n) {
    return function(str) {
        var offset = 1;
        var _locales = i18n.get();
        var entry = _locales[str] || str;

        if (angular.isString(entry)){
            str = entry;

        } else {
            var plural = arguments[1] 
            str = entry[plural] || entry['other'] || str;
        }

		for (var i = offset; i < arguments.length; i++) {
			str = str.split('%' + (i - offset + 1)).join(arguments[i]);
		}

		return str;
	}
})
