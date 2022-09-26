<?php 
echo "eotkds<br />";
$microT =  microtime();
echo $microT."<br />";
$list1 =list($a, $b) = explode(" ", $microT);
print_r($list1);
echo "<br />";
echo (float)$a."<br />";
echo (float)$b."<br />";

?>