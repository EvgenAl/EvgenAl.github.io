<?php

$recepient = "urban-direct@yandex.ru";


$name = "Заявка с футера сайта";
$mail = trim($_POST["email"]);
$text = trim($_POST["message"]);
$message = "Место отправки: $name\nПочта: $mail\nТекст: $text";

$pagetitle = "Новая заявка";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");