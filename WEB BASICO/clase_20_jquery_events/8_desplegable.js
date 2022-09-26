// JavaScript Document
$(document).ready(function(){
	'use strict';
	$('#titulo1').mouseenter(function(){
		$('#parrafo1').slideDown('fast');
	});
	$('#titulo1').mouseleave(function(){
		$('#parrafo1').slideUp('fast');
	});
	
	
	
	$('#titulo2').click(function(){
		$('#parrafo2').slideToggle('fast');
	});
	$('#titulo3').click(function(){
		$('#parrafo3').slideToggle('fast');
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	$('#abrirSubmenu').click(function(){
		$('#submenu').slideToggle('fast');
	});
});