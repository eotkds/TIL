<?php 

$path = "ABC";
/**
 * false : return empty Array
 */
function test0($arg){
    echo "start<br />";
    if(!false){
        $GLOBALS["error"] = $arg . "is not file.";
        return Array();
    }
    echo Array();
}
test0($path);
echo $_SERVER["HTTP_HOST"]."<br />";
// echo $_SERVER[HTTP_HOST]; #에러
echo $GLOBALS["error"];
?>