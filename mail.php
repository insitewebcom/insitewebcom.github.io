<?php

$recepient = "gr4m0zeka@gmail.com";
$sitename = "insitewebcom.github.io";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["message"]);
$message = "Имя: $name \nТелефон: $phone \nТекст: $text";
$padetitle = "Заявочка";

mail($recepient, $padetitle, "Content-type: text/plugin; charset=\"utf-8\"\n From: $recepient");