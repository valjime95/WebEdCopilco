//javascript document
$(document).ready(function(){
	'use strict';
	
	
	$('#btn-link').click(function(){
		$('p').css({
			'color':'red'
		});
	});
	
	$('#btn-form').click(function(){
		$('p').text('esto es otro texto').css({
			'color':'blue'
		});
	});
});