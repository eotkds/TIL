<?php


class A
{

    public static function say(){
        return static::intro();
    }

    public static function intro(){
        echo "A is parent.<br />";
    }
}


class B extends A 
{
    public static function test(){
        A::say();
        parent::say();
        self::say(); # 여기서 self는 부모클래스를 가르킨다.
    }

    public static function intro(){
        echo "B is son.<br />";
    }

}

B::test();

?>