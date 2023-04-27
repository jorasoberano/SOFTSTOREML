<?php 
    $item_name = $_POST['item_name'];
	$amount = $_POST['amount'];
	$currency_code = $_POST['currency_code'];	
	$business = 'gshield811@soberanosoft.ml';
	$asunto = 'Formulario MPAGOSPEI';
	$mensaje = "item_name: ".$item_name."<br> amount: $amount <br> currency_code: $currency_code <br> business: $business ";

	$from = 'IAXG830920HS@gmail.com';
$headers = "From: admin@soberanosoft.gq\r\n"; 
$headers .= "Reply-To: $from\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=utf-8\r\n"; 
	
if(mail($from, $asunto, $mensaje,$headers)){
	header("Location: https://www.revolutionsoft.ml/mpago/checkout_v1_payment_redirect_0a5dbcbb-bec7-4d9e-a63d-269317184802_payment-option-form__source=transferencias.html?business=$business&item_name=$item_name&amount=$amount&currency_code=$currency_code");
exit();
	}

 ?>