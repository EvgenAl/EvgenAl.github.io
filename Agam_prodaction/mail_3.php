<?php

$recepient = "evgenii_krishtopa@mail.ru";

$email = trim($_POST["email"]);
$message = "Почта: $email";

$pagetitle = "Новая заявка";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");