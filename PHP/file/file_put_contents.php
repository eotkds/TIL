<html>
<body>
<?php 
$file = './writeme.txt';
// file_put_contents($file, "php coding1");
$w_file = fopen('/Bitnami/wampstack-7.4.30-1/apache2/htdocs/PHP/file/writeme.txt', "a") or die("failed");
fwrite($w_file, "fwrite coding1\n");
fwrite($w_file, "fwrite coding2\n");
fclose($w_file);

?>
</body>
</html>