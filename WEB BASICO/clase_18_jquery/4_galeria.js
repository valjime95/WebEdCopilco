// JavaScript Document
$(document).ready(function(){
	'use strict';
	$('#uno').click(function(){
		$('#imgPrincipal').html('<img src="images/perro-azul.jpg" alt="Perro azul">');
	});
	$('#dos').click(function(){
		$('#imgPrincipal').html('<img src="images/perro-gris.jpg" alt="perro gris">');
	});
	$('#tres').click(function(){
		$('#imgPrincipal').html('<img src="images/perro-negro.jpg" alt="perro negro">');
	});
	$('#cuatro').click(function(){
		$('#imgPrincipal').html('<img src="images/perro-rosa.jpg" alt="perro-rosa">');
	});
});