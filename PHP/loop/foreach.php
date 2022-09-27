<?php 
$bo = Array();
$bo["list"] = "a";
$bo["list2"] = "b";
$bo["list3"] = "c";
$bo["list1"] = Array();
$bo["list1"][] = "a";
$bo["list1"][] = "b";
$bo["list1"][] = "c";

foreach($bo as $k1 => $v1){
    $now =time();
        foreach($bo["list1"] as $k2 => $v2){
            if($v1 == $v2){
                // var_export($v1);
                sleep(3);
            }
        }
    if(time() - $now >=2) {
        echo "exit";
        break;
    }
}

?>