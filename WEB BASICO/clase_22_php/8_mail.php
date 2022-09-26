<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Documento sin título</title>
</head>

<body>
	<?php 
		$destinatario="ramiro@edumac.com.mx";
		$asunto="Nuevo mensaje de Formulario";
		$mensaje="Este es el mensaje de correo";
		$encabezado="Content-Type:text/html; charset=UTF-8"; 
	
	mail($destinatario,$asunto,$mensaje,$encabezado);
	?>
</body>
</html>