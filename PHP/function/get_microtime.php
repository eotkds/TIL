<?php 
function get_microtime()
{
    list($usec, $sec) = explode(" ",microtime());
    return ((float)$usec + (float)$sec);
}

echo get_microtime();
echo "<br />";
// Prints the day
echo gettype(get_microtime());
echo "<br />";
echo date("l") . "<br>";

// Prints the day, date, month, year, time, AM or PM
echo date("l jS \of F Y h:i:s A");

echo "<br />";
$my_array = array("Dog","Cat","Horse");

list($a, $b, $c) = $my_array;
echo "I have several animals, a $a, a $b and a $c.";

echo "<br /> 123".PHP_EOL;
$str = "Hello world. It's a beautiful day.";
print_r (explode(" ",$str));
?>