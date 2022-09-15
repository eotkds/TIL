<?php 
class MyClass {

    function say(string $string, int $number) {
        $arr = array($string, $number);

        return $arr;
    }

}

$my_class = new MyClass(); 

$result = $my_class->say('abc', 3);

print_r($result);

class Fruit {
    public $name;
    function set_name(string $name, string $color) 
    {
        $this->name = $name;
        $this->color = $color;
    }
    
    function get_fruit(): string {
        $string = "this fruit is {$this->name}. this color is {$this->color}.";

        return $string;
    }
}

$apple = new Fruit();
$apple->set_name("Apple",  "Red");
echo $apple->name.PHP_EOL;
var_dump($apple instanceof Fruit);
echo $apple->get_fruit();


?>