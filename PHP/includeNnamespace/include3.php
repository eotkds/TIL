<?php 
echo "checking constants.<br />";
if(!defined("_test_")) exit;
include_once "$g4[path]/include2.php";
echo "include3 <br />";
/**
 * include3.php
 */
function greeting(){
    echo "Hello! <br />";
}
?>