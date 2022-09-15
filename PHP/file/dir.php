<?php 
echo getcwd()."<br />";
chdir("../");
echo getcwd()."<br />";


$dir = "../";
$files1 = scandir($dir);
$files2 = scandir($dir, 1);

print_r($files1);
echo "<br />";
print_r($files2);


// mkdir("1/2/3/4", 0700, true);
?>