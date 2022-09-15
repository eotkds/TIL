<?php 
class Member {
    var $id = "hong";
    public $name = "gildong";
    protected $nickname = "guedo";
    private $age = 20;


}


$member = new Member();
echo $member -> id . PHP_EOL;
echo $member -> name . PHP_EOL;
echo "abc" . PHP_EOL;
// echo $member -> name . PHP_EOL;

// echo $member -> nickname;
// echo $member -> age;


?>