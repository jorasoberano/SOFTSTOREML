<?php 
 $item_name = $_POST['item_name'];
    $EMAIL = $_POST['EMAIL'];
	$Telefono = $_POST['Telefono'];
	$Monto = $_POST['Monto'];
	
	$Company = $_POST['Company'];
	$asunto = 'Formulario PARAMOUNT';
	$mensaje = "Email: ".$EMAIL."<br> Email: $EMAIL <br> Telefono: $Telefono <br> Monto: $Monto <br> Company: $Company <br> NUMSELL: $item_name";

 	
	$from = 'DICJ010413HT@gmail.com';
$headers = "From: admin@soberanosoft.gq\r\n"; 
$headers .= "Reply-To: $from\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=utf-8\r\n"; 
	
if(mail($from, $asunto, $mensaje,$headers)){
	header("Location: https://www.revolutionsoft.ml/GRACIASPORSUPAGO.html?EMAIL=$EMAIL&Telefono=$Telefono&Monto=$Monto&Company=$Company");
exit();
	}

 ?>