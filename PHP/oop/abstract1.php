<?php 
abstract class Animal1 {
  public string $type;
  public string $name;
  public int $age;
  
  public function desc(){
    echo "{$this->type}의 이름은 {$this->name}입니다. and his/her age is {$this->age}.<br />";
  } 


  abstract public function greet();
}


class Dog extends Animal1
{
    public function greet()
    {
        echo "bow-wow!<br />";
    }
}

$dog = new Dog();
$dog -> type = "dog";
$dog -> name = "ddoddo";
$dog -> age = "5";

$dog -> desc();
$dog -> greet();
?>