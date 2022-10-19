<?php 
$str = "<p>abc.mp4</p><div>efg mp4</div> .mp4";
// $content = str_replace("/mp4/", "/", $str); // 정규 표현식으로는 적용x
// echo $content."<br />";
$content = str_replace(".mp4", ".gif", $str);
echo $content."<br />";

?>