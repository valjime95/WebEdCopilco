// JavaScript Document
$(document).ready(function(){
	'use strict';
	$('#uno').click(function(){
		$('#imagen').fadeIn('slow').html('<section class="flex"><img src="Img/NotreDame_01.jpg" alt="01"><button id="cerrar">x</button></section>');
		
		$('#cerrar').click(function(){
			$('#imagen').fadeOut('slow');
		});
	});
	$('#dos').click(function(){
		$('#imagen').fadeIn('slow').html('<section class="flex"><img src="Img/NotreDame_02.jpg" alt="02"><button id="cerrar">x</button></section>');
		
		$('#cerrar').click(function(){
			$('#imagen').fadeOut('slow');
		});
	});
	$('#tres').click(function(){
		$('#imagen').fadeIn('slow').html('<section class="flex"><img src="Img/NotreDame_03.jpg" alt="03"><button id="cerrar">x</button></section>');
		
		$('#cerrar').click(function(){
			$('#imagen').fadeOut('slow');
		});
	});
	$('#cuatro').click(function(){
		$('#imagen').fadeIn('slow').html('<section class="flex"><img src="Img/NotreDame_04.jpg" alt="04"><button id="cerrar">x</button></section>');
		
		$('#cerrar').click(function(){
			$('#imagen').fadeOut('slow');
		});
	});
	$('#cinco').click(function(){
		$('#imagen').fadeIn('slow').html('<section class="flex"><img src="Img/NotreDame_05.jpg" alt="05"><button id="cerrar">x</button></section>');
		
		$('#cerrar').click(function(){
			$('#imagen').fadeOut('slow');
		});
	});
	
});