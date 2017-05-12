<?php

$recepient = "evgenii_krishtopa@mail.ru";

$email = trim($_POST["email"]);
$text = trim($_POST["message"]);
$message = "Почта: $mail\nТекст: $text";

$pagetitle = "Новая заявка";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");