<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Untitled Document</title>
</head>

<body>
	
	<?php
	
			foreach($_POST['check_list'] as $seleccion){
				print "<p>".$seleccion."</p>";
			}
		
	?>
	
	
</body>
	
	
	
</html>