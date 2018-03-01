<?php
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
$message = "Телефон: $phone";
$to = "m.lis@nextform.ru";
$headers = "Content-type: text/plain; charset = UTF-8";
$subject = "Новый заказ с сайта";
$send = mail($to, $subject, $message, $headers);
?>