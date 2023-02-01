<?php
date_default_timezone_set("Asia/Seoul");
echo "Today is " . date("Y/m/d") . "<br>";
echo "Today is " . date("Y.m.d") . "<br>";
echo "Today is " . date("Y-m-d") . "<br>";
echo "Today is " . date("y-M-D") . "<br>"; # 'D' : 요일, 'd': 일
echo "Today is " . date("Y") . "<br>";
echo "Today is " . date("l")."<br />";

echo "The time is " . date("h:i:sa"). "<br />";
echo "The time is " . date("h:i:sA"). "<br />";
echo "The time is " . date("H:i:sA"). "<br />";

$week_form = (int)date("w", time());
echo "The week integer is " . $week_form. "<br />";
$gt['time'] = time();

echo "The time is {$gt['time']}". "<br />";
echo "The time is ".date("Y-m-d H:i:s", $gt['time'])."<br />";

?>