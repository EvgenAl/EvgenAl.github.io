<?php

$recepient = "evgenii_krishtopa@mail.ru";

$place = "Заявка с кнопки 'Заказать обратный звонок'";
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["message"]);
$message = "Место отправки: $place\nИмя: $name\nТелефон: $phone\nСообщение: $text";

$pagetitle = "Новая заявка";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");