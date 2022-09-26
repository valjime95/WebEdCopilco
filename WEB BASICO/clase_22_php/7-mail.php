<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Documento sin título</title>
</head>

<body>
	<p>Gracias <?php print $_POST['nombrecompleto'];?> por registrarte. </p>
		
		<p>Tus datos son los siguientes:</p>
		
		<p>Nombre Completo: <?php print $_POST['nombrecompleto'];?> </p>
		<p>Género: <?php print $_POST['sexo'];?></p>
		<p>Ciudad: <?php print $_POST['ciudad'];?></p>
		<p>Teléfono: <?php print $_POST['telefono'];?></p>
		<p>Correo Electrónico: <?php print $_POST['email'];?></p>
		
		<p>¿Cómo te podemos ayudar? <?php print $_POST['mensaje'];?></p>
		<p>Estos son tus pasatiempos:</p>
		<?php
		foreach($_POST['pasatiempos'] as $selection){
			print "<p>".$selection."</p>";
		}
		?>
	
	
	
	
	
	</p>
</body>
</html>