<?php 
$gt = "hello world~";
$t = date('H:i:s');
$h = substr($t, 0, 2);
$time = sprintf('%02d', $h);

echo $time;


