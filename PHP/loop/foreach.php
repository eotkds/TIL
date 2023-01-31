<?php 
$boo = array();
$boo["list"] = "a";
$boo["list2"] = "b";
$boo["list3"] = "c";
$foo = array();
$foo[] = "2";
$foo[] = "4";
$foo[] = "6";
$k = 10;
echo $k;
echo "<br>";
foreach($foo as $k => $v){
    echo "$k, $v";
    echo "<br>";
}
echo $k;
echo "<br>";
foreach($boo as $k => $v){
    echo "$k, $v";
    echo "<br>";
}
echo $k;
echo "<br>";
?>