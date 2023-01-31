<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php 
    header('Location: http://127.0.0.1:81/PHP/settings/set_time_limit.php');
    ?>
</head>
<body>
    
</body>
</html>

<?php 
/**
 * 참조 사이트
 * https://www.happyjung.com/lecture/1150?device=mobile
 * 예시1) URL/foo/bar
 * 예시2) URL?foo=bar
 */


echo $_SERVER['PHP_SELF'];
echo "<br>";
echo $_SERVER['REQUEST_URI'];
echo "<br>";
echo $_SERVER['SCRIPT_NAME'];


exit();
?>