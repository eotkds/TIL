<?php

define('Title', 'php Tutorial');
echo Title;
// define("title", 'Java Tutorial');
echo "<br />";
$a = 100;
echo gettype($a);
settype($a, 'double');
echo "<br />";
echo gettype($a);
echo "<br />";
echo is_double($a);
?>