<?php
session_save_path('./');
session_start();
$_SESSION['title'] = 'binggo';
printf($_SESSION['title'])
?>