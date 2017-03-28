<?php

$recepient = "evgenii_krishtopa@mail.ru";


$surname = trim($_POST["surname"]);
$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$message = "Фамилия: $surname\n Имя: $name\n Почта: $mail\n";

$pagetitle = "Новая заявка";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");