<?php

$recepient = "urban-direct@yandex.ru";


$name = "Заявка с  формы модального кона";
$mail = trim($_POST["email"]);
$message = "Место отправки: $name\nПочта: $mail";

$pagetitle = "Новая заявка";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");