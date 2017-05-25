<?php

$recepient = "evgenii_krishtopa@mail.ru";

$place = "Заявка с кнопки 'Проконсультироваться";
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$message = "Место отправки: $place\nФИО: $name\nТелефон: $phone\nПочта: $email";

$pagetitle = "Новая заявка";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");