// JavaScript Document
$(document).ready(function(){
	'use strict';
	$('#poner').click(function(){
		$(this).addClass('rojo');
	});
	$('#quitar').click(function(){
		$(this).removeClass('rojo');
	});
	$('#conmutar').click(function(){
		$(this).toggleClass('rojo');
	});
});



	
