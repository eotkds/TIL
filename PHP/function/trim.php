<?php
$g4 = array();
$g4["memo_table"] = "/PHP/";
$g4["time_ymdhis"] = "1234-01-01";
$member["mb_id"] = "eotkds";
$me_id = "eotkds";

// print_r($g4)."<br />";

$str ="update $g4[memo_table]
set me_read_datetime = '$g4[time_ymdhis]' 
where me_id = {$me_id} 
and me_recv_mb_id = '$member[mb_id]' 
and me_read_datetime = '0000-00-00 00:00:00' ";

echo trim($str);
?>