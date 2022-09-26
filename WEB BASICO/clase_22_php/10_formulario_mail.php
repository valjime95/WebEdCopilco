<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Documento sin título</title>
</head>

<body>
	<p>Gracias <?php print $_POST['nombre'];?>, tus datos han sido capturados con éxtio:</p>
	<p>Nombre:<?php print $_POST['nombre'];?></p>
	<p>Teléfono:<?php print $_POST['tel'];?></p>
	<p>E-mail:<?php print $_POST['mail'];?></p>
	<p>Sexo:<?php print $_POST['sexo'];?></p>
	<p>Ciudad:<?php print $_POST['ciudad'];?></p>
	<p>Medios:</p>
		<?php
		foreach($_POST['medios'] as $selection){
			print "<p>".$selection."</p>";
		}
		?>
	<p>N:<?php print $_POST['mensaje'];?></p>
	<?php
		$destinatario="ramiro@edumac.com.mx";
		$asunto="Nuevo mensaje";
		$encabezado="Content-Type:text/html; charset=UTF-8"; 
		$mensaje="<p>Los datos son:</p> 
			<ul>
				<li>NOMBRE:".$_POST['nombre']."</li>
				<li>EMAIL:".$_POST['mail']."</li>
				<li>TELEFONO:".$_POST['tel']."</li>
				<li>SEXO:".$_POST['sexo']."</li>
				<li>CIUDAD:".$_POST['ciudad']."</li>
				li>MEDIOS";
	
				$check   =@$_POST["medio"];
					foreach($_POST['medio'] as $seleccion){
						print "<p>".$seleccion."</p>";
					}

		$mensaje.=":".$_POST['check']."</li>
				<li>MENSAJE:".$_POST['mensaje']."</li>
			</ul>";

		mail($destinatario,$asunto,$mensaje,$encabezado);
	
		mail($_POST['mail'],"Confirmación de datos","Quedan confirmados tus datos, en breve nos ponemos en contacto contigo.",$encabezado)
	?>
</body>
</html>