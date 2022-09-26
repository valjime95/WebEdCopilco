// JavaScript Document
$(document).ready(function(){
	'use strict';
	$('#abrir').click(function(){
		$('nav').animate({
			'right':'0%'
		});
	});
	$('#cerrar').click(function(){
		$('nav').animate({
			'right':'-50%'
		});
	});
});