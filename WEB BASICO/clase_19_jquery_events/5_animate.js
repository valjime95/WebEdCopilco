// JavaScript Document
$(document).ready(function(){
	'use strict';
	$('#aumentar').click(function(){
		$('p').animate({
			'font-size':'2em'
		},500);
	});
	$('#normalizar').click(function(){
		$('p').animate({
			'font-size':'1em'
		},500);
	});
	$('#disminuir').click(function(){
		$('p').animate({
			'font-size':'0.5em'
		},500);
	});
});


