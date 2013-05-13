angularity-i18n
===============

Localization fliter.

Using:
-------

### regular text:
in template:

    {{ 'Hello world' | i18n }}

in locales.js:

    var _locales = { { 'en-us' : { 'Hello world' : 'Hello world' }, 'zh-cn' : { 'Hello world' : '世界你好' } };

### variables:
in template:

    {{ 'Hello %1, I am %2' | i18n:'Tom':'Bob' }}
    
in locales.js:

    var _locales = { 'en-us': { 'Hello %1, I am %2': 'Hello %1, I am %2' } };

### plural forms:
in template:

    {{ 'There is %1 apple in %2 basket' | i18n:'plural':4:'my' }}
    
in locales.js:

    var _locales = {
         'en-us': {
             'There is %1 apple in %2 basket': {
                0 :   'There is no apple in %2 basket',
                1 :   'There is %1 apple in %2 basket',
                other : 'There are %1 apples in %2 basket'
             }
         }
     }

### in js:
in controller:

    $filter('i18n')('Hello world');

or

    i18nFilter('There is %1 apple in %2 basket', 'plural', 4, 'my');

