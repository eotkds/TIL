<?php 

class MyEx extends Exception 
{
    public function myMsg($my_msg){
        return $my_msg;
    }
}


$msg = "Exception class was emerged";
$code = 123;
$e = new MyEx($msg, 123);

echo $e -> myMsg("Exception Class is inherited");
echo "<br />";
echo "예외 메시지: ".$e -> getMessage();
echo "<br />";
echo "예외 코드: ".$e -> getCode();
?>