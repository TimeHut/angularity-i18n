angularity-i18n
===============

Localization library for AngularJS, providing a filter and a factory.

Usage:
-------

### Preparation:
You need to determine the language and set the locale dictionary manually by calling `i18n.set({...})`. Here's an example.

	angular.module('myapp', ['angularity-i18n']).run(function(i18n, $http){
		$http.get('/i18n/en-US.json').success(function(data){
			i18n.set(data);
		});
	});

### regular text:
in template:

    {{ 'Hello world' | i18n }}

in locale.json:

    { 'Hello world' : '世界你好' }

### variables:
in template:

    {{ 'Hello %1, I am %2' | i18n:'Tom':'Bob' }}
    
in locale.json:

    { 'Hello %1, I am %2': 'Hello %1, I am %2' }

### plural forms:

if the value of the entry is an object, it would be treated as pluralization. And the first argument indicates the number.

in template:

    {{ 'There is %1 apple in %2 basket' | i18n:4:'my' }}
    
in locale.json:

	{ 'There is %1 apple in %2 basket': {
		'0' :   'There is no apple in %2 basket',
		'1' :   'There is %1 apple in %2 basket',
		'other' : 'There are %1 apples in %2 basket'
		}
	}

### in js:
in controller:

	// function TestController(i18n)...
	i18n('Hello world');

or

    $filter('i18n')('Hello world');

or

    i18nFilter('There is %1 apple in %2 basket', 4, 'my');

### Better way to make i18n JSON file
Writing i18n file in JSON format is a little painful. I prefer writing it in YAML, then converting it to a JSON file. `script/yaml_i18n.rb` is a ruby file that I use to do such a job. Have fun.

