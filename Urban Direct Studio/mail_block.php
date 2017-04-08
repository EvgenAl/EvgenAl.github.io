<?php

$recepient = "urban-direct@yandex.ru";


$name = "Заявка с  блока 'Хотите улучшить свой сайт'";
$mail = trim($_POST["email"]);
$sitename = trim($_POST["sitename"]);
$message = "Место отправки: $name\nПочта: $mail\nНазвание сайта: $sitename";

$pagetitle = "Новая заявка";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");