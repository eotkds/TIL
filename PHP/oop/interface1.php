<?php 
interface Animal {
  public function makeSound();
}

class Cat implements Animal {
    public function makeSound()
    {
        echo "Meow";
    }
}


$cat = new Cat();
$cat->makeSound();

?>