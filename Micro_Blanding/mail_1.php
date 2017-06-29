<?php

$recepient = "evgenii_krishtopa@mail.ru";

$phone = trim($_POST["phone"]);
$message = "Телефон: $email";

$pagetitle = "Новая заявка";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");