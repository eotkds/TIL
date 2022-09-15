<?php 
interface Animal {
  public function introduce($name);
  public function exit($name);
}

interface AnimalSound {
  public function makeSound();
}

class Cat implements Animal, AnimalSound {
   public function introduce($name)
   {
    echo "Heollo, Im {$name}.<br />";
   } 
  public function exit($name){
    echo "{$name} is left.<br />";
  }
  public function makeSound()
    {
        echo "Meow.<br />";
    }
}


$cat = new Cat();
$cat->introduce("catty");
$cat->makeSound();
$cat->exit("catty");


?>