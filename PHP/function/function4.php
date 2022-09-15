<?php
$test = 2;
function get_global($a){
    global $test;
    $test = 3;
    return $test;

}
echo get_global("1");
?>