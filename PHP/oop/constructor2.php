<?php 
class Example {
    public $name;

    public function __construct(string $name)
    {
        $this->name = $name;
    }

    function __destruct()
    {
        echo "<br /> Example descructed";
    }
}

$name = "Gildongmu";

$example = new Example($name);

echo $example->name;
?>