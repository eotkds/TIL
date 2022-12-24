<?php
class A{
    public function __construct()
    {
        echo __CLASS__;
    }

    public function sayHello(){
        echo "<br />";
        echo "abc<br />";
        return dirname(dirname(__FILE__));
    }

}

$say = new A();
echo $say->sayHello();
echo "<br />";
?>