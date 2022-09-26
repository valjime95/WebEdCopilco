<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Untitled Document</title>
</head>

<body>
	<?php $arreglo_1 = array("television","internet","radio","gaceta");?>
	
	<p><?php print($arreglo_1[0]);?></p>
	<p><?php print($arreglo_1[1]);?></p>
	<p><?php print($arreglo_1[2]);?></p>
	<p><?php print($arreglo_1[3]);?></p>
	
	
	
	
	

	<?php $persona = array("nombre"=>"Diego","edad"=>18,"telefono"=>"00 00 00 00");?>
	
	<p>Hola <?php print $persona["nombre"];?>, tu edad es 
			<?php print $persona["edad"];?>, y tu teléfono es: 
			<?php print $persona["telefono"];?>
	</p>
</body>
	
	
</html>