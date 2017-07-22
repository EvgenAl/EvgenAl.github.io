<?php

$recepient = "evgenii_krishtopa@mail.ru";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$message = trim($_POST["message"]);
$request = "Имя: $name\n Почта: $email\n Сообщение: $message";

$pagetitle = "Новая заявка";
mail($recepient, $pagetitle, $request, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");