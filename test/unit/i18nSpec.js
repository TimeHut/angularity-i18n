'use strict';

describe('angularity-i18n', function(){
	describe('filter', function(){
		var i18n;
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

		beforeEach(inject(function($filter, i18nEntry){
			i18n = $filter('i18n');	
			i18nEntry.set(locales);
		}))

		it('should translate plain text', function(){
			expect(i18n('Hello World')).toEqual('Hello World');
		})
		it('should accept params', function(){
			expect(i18n('Hello %1, I am %2', 'Bob', 'Tom')).toEqual('Hello Bob, I am Tom');
		})
		it('should support pluralization', function(){
			expect(i18n('There is %1 apple in %2 basket', 'plural', 4, 'my')).toEqual('There are 4 apples in my basket' )
		})
	})
})
