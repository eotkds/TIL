<?php 
class Example {
    protected $name;

    public function __construct()
    {
        $this->name = "Gildong";
        echo $this -> name;
    }
}

new Example();
?>