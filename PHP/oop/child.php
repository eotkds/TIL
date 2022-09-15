<?php 
include "parent.php";

class Child extends Parents {
    public function echoParents() : string {
        return $this->parent;
    }
}
$child = new Child();
echo $child->echoParents();
?>