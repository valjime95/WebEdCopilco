<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Untitled Document</title>
</head>

<body>
	<?php $numeros = array(1,2,3,4,5);
	
	foreach($numeros as $digito){
		print("<p>".$digito."</p>");
	}
	
	$persona = array("nombre"=>"Juen","3edad"=>0,"correo"=>"correo@lamarca.com");
	
	foreach($persona as $claveDato=>$dato){
		print("<p>".$claveDato." : ".$dato."</p>");
	}
	
	?>
	
</body>
</html>