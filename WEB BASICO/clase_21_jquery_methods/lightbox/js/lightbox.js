// JavaScript Document
$(document).ready(function(){
	'use strict';
		$('#uno').click(function(){
			$('#imgPrincipal').fadeIn('slow').html('<img src="img/hamburguesa.jpg" alt="Hamburguesa"><button id="cerrar">X</button>');
			$('#cerrar').click(function(){
				$('#imgPrincipal').fadeOut('slow');
			});
		});	 
	$('#dos').click(function(){
			$('#imgPrincipal').fadeIn('slow').html('<img src="img/licuado.jpg" alt="Licuado"><button id="cerrar">X</button>');
			$('#cerrar').click(function(){
				$('#imgPrincipal').fadeOut('slow');
			});
		});	 
	$('#tres').click(function(){
			$('#imgPrincipal').fadeIn('slow').html('<img src="img/sushi.jpg" alt="Sushi"><button id="cerrar">X</button>');
			$('#cerrar').click(function(){
				$('#imgPrincipal').fadeOut('slow');
			});
		});	 
		
});