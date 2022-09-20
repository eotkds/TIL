<?php 
include "./user1.php";
include "./user2.php";
include "./user3.php";

$user1 = new \AnswerBook\User();
echo $user1 -> getName()."<br />";

$user2 = new \AnswerBook\PHP\User();
echo $user2 -> getName()."<br />";

$user2 = new \AnswerBook\PYTHON\User();
echo $user2 -> getName()."<br />";
?>