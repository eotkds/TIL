<?php 
header("Content-typeL image/png");
$stirng = $_GET['text'];
$im = imagecreatefrompng("button.png");
$orange = imagecolorallocate($im, 60, 87, 156);
$px = (imagesx($im) - 7.5 * strlen($stirng)) / 2;

imagestring($im, 4, $px, 9, $stirng, $orange);
imagepng($im);
imagedestroy($im);
?>