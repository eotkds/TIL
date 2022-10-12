<?php 

$date1= date_create("now",timezone_open("Asia/Seoul"));
$date2 = date_create("2022-10-11 13:00:00");
$date3 = date_format($date1, "Y/m/d H:i:s");
$date4 = date_format($date2, "Y/m/d H:i:s");
$diff = date_diff($date2, $date1);

var_export($date3);
var_export($date4);
echo "<br />";
var_export($diff);

?>


