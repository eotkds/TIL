<?php 
trait Dog {
    public string $type;
    public string $name;

    public function __construct(
        string $type,  string $name
    ){
        $this->type = $type;
        $this->name =$name;
    }

    public function desc(){
        echo "{$this->type}'s name is {$this->name}.<br />";    
    }
}

trait Say
{
    abstract public function greet();
}

class Dog1 {
    use Dog, Say;

    public function greet(){
        echo "{$this->name} : Bow-Wow!<br />";
    }

}

$dog1 = new Dog1("Shiba", "ddoddo");
$dog1->desc();
$dog1->greet();
?>