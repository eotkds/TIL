<?php
$member = ['a', 'b', 'cd'];

echo $member[0].'<br />';
echo $member[1].'<br />';
echo $member[2].'<br />';

function get_members(){
    global $member;
    return $member;
}

var_dump(get_members()[0]);
$cars = array("Volvo","BMW","Toyota");
for($i = 0; $i < count($cars); $i++){

    echo $cars[$i].'<br />';

}
?>