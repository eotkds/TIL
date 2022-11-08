<?php  
$text = '<p>Test paragraph.</p><!-- Comment --> <a href="#fragment">Other text</a>';
echo $text;
echo "<br />";
echo strip_tags($text);
echo "\n";



?>