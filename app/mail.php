<?php

$admin_email = "dessid@yandex.ru";
$project_name  = "Креативное Агентство";
$form_subject = "Сообщение с сайта \"$project_name\"";

$guest_name = trim($_POST["guest-name"]);
$guest_phone = trim($_POST["guest-phone"]);
$guest_message = trim($_POST["guest-message"]);
$form_name = trim($_POST["form-name"]);

$message = "Форма: $form_name <br>";
$message .= "Имя: $guest_name <br>";
$message .= "Имя: $guest_phone <br>";
$message .= "Имя: $guest_message <br>";

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

mail($admin_email, adopt($form_subject), $message, $headers);

?>
