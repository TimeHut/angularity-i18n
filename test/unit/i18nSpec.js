'use strict';

describe('angularity-i18n', function(){
	describe('factoery i18n', function(){
		var locales = {
			'Hello World' : 'Hello World',
			'Hello %1, I am %2' : 'Hello %1, I am %2',
			'There is %1 apple in %2 basket' :{
				0 :   'There is no apple in %2 basket',
				1 :   'There is %1 apple in %2 basket',
				other : 'There are %1 apples in %2 basket'
			}
		}

		beforeEach(angular.mock.module('angularity-i18n'));

		beforeEach(inject(function(i18n){
			i18n.set(locales);
		}))	

		it('should set and get dictionary', inject(function(i18n){
			expect(i18n.get()).toEqual(locales);
		}))	
		it('should translate when called', inject(function(i18n){
			expect(i18n('There is %1 apple in %2 basket', 4, 'my')).toEqual('There are 4 apples in my basket');
		}));
	});
	describe('filter', function(){
		var t;
		var locales = {
			'Hello World' : 'Hello World',
			'Hello %1, I am %2' : 'Hello %1, I am %2',
			'There is %1 apple in %2 basket' :{
				0 :   'There is no apple in %2 basket',
				1 :   'There is %1 apple in %2 basket',
				other : 'There are %1 apples in %2 basket'
			}
		}
		
		beforeEach(angular.mock.module('angularity-i18n'));

		beforeEach(inject(function($filter, i18n){
			t = $filter('i18n');	
			i18n.set(locales);
		}))

		it('should translate plain text', function(){
			expect(t('Hello World')).toEqual('Hello World');
		})
		it('should accept params', function(){
			expect(t('Hello %1, I am %2', 'Bob', 'Tom')).toEqual('Hello Bob, I am Tom');
		})
		it('should support pluralization', function(){
			expect(t('There is %1 apple in %2 basket', 4, 'my')).toEqual('There are 4 apples in my basket' )
		})
	})
})
