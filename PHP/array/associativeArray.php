<?php
$grade = array('a'=>10, 'k'=>6, 's'=>8);
$grade["b"] = 15;
var_dump($grade);
echo "<br />";
echo $grade["b"];
foreach($grade as $key => $v){
    echo "key: {$key} value:{$v}<br />";
}

?>
