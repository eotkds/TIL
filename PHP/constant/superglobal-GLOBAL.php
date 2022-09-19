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
echo $GLOBALS["error"];
?>