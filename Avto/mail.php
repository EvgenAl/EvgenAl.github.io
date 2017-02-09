<?php

$recepient = "evgenii_krishtopa@mail.ru";


$name = trim($_POST["name"]);
$phone = trim($_POST["tel"]);
$mail = trim($_POST["email"]);
$text = trim($_POST["message"]);
$message = "Имя: $name \nТелефон: $phone \n Почта: $mail \nТекст: $text";

$pagetitle = "Новая заявка";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");