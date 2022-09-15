<?php
$members = ['a', 'b', 'cd'];

function get_members(){
    global $members;
    return $members;
}

$tmp = get_members();

for($i = 0; $i < count($members);$i ++){
    echo ucfirst($members[$i])."<br />";
}



?>