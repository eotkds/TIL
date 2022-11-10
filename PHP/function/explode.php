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


<?php 
$tmp = $_SERVER['QUERY_STRING'];
echo $tmp."<br />";
var_export(explode("=",$tmp));
echo "<br />";
var_export(explode("=",$tmp)[0]);
echo "<br />";

// Undefined offset 에러 발생!!
// var_export(explode("=",$tmp)[1]); 
?>