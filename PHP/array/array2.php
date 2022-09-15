<?php
$member = ['a', 'b', 'cd'];

function get_members(){
    global $member;
    return $member;
}

$tmp = get_members();
echo $tmp[1];

?>