<?php 
namespace AnswerBook\PHP;

class Student
{
    protected $name;
    public function __construct(
        $name
    )
    {
        $this->name = $name;
    }

    public function name()
    {
        return $this -> name;
    }
}


namespace AnswerBook\PYTHON;
class Student
{
    protected $name;
    public function __construct(
        $name
    )
    {
        $this->name = $name;
    }

    public function name()
    {
        return $this -> name;
    }
}

$student1 = new \AnswerBook\PHP\Student('PHP!');
echo $student1 -> name()."<br />";


$student2 = new \AnswerBook\PYTHON\Student('PYTHON!');
echo $student2-> name()."<br />";
?>