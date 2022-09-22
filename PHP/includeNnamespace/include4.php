<?php 
include_once("common1.php");

include_once "./include3.php";
echo "include4 <br />";
// include 사용하면 아래 함수를 사용 가능하지만 include3.php에 exit이 있어 종료.
// 때문에 exit이 들어간 페이지를 include할 경우 exit 이전까지만 실행하고 종료.
echo greeting();
/*
하지만 그누보드 config.php에서 상수를 true로 설정하고,
common.php에 config를 가져왔기 때문에 exit을 통과해서 사용가능하다.
exit은 외부 사용자가 접근을 하지 못하도록 막아 놓는 효과가 있다.
*/

?>