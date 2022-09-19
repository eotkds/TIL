<?php

use MyClass as GlobalMyClass;

class Myclass
{
    public static $msg = "Hello world.<br />";

    public static function say(){
        return self::$msg;
    }
}


class Hisclass 
{
    public function say(){
        return Myclass::$msg."!!~!!<br />";
    }

}


echo Myclass::say();

$hisclass = new Hisclass();
echo $hisclass -> say();

$myclass = new Myclass();
echo $myclass -> say();

?>