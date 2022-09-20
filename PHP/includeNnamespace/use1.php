<?php 
include "./user1.php";
include "./user2.php";
include "./user3.php";

use AnswerBook\User as User;
use AnswerBook\PHP\User as PhpUser;
use AnswerBook\PYTHON\User as PythonUser;

echo "use keyword use<br />";

$user1 = new User();
echo $user1 -> getName()."<br />";

$user2 = new PhpUser();
echo $user2 -> getName()."<br />";

$user2 = new PythonUser();
echo $user2 -> getName()."<br />";
?>