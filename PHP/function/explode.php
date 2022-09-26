<?php 
echo "example<br />";
$vb = "|"."start01"."|"."start01@star";
$vbArr = explode("||", $vb);
print_r($vbArr);
echo "<br />";
echo $vbArr[0];
$vb = "|".str_replace("|","",$vbArr[0])."|";
echo "<br />";
echo $vb."<br />";

?>