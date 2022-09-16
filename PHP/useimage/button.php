<?php 
header("Content-type: image/png");
// $string = $_GET['text'];
// echo $string.PHP_EOL;
$im = imagecreatefrompng("/c/Users/conne/Desktop/practice/TIL/PHP/useimage/button.png");
// echo $im.PHP_EOL;

// $blue = imagecolorallocate($im, 60, 87, 156);
// $px = (imagesx($im) - (7.5 * strlen($string))) / 2; #7.5는 문자 하나의 폭 길이

// imagestring($im, 4, (int)$px, 9, $string, $blue);


imagepng($im);
imagedestroy($im);
?>