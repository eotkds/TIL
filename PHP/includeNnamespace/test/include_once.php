<?php 
/**
 * include_once 사용시 현재 디렉토리에 없는 경우 작동 확인
 * 결론 : 에러
 * 다른 곳에서 오류가 안났던 이유는 상위 파일에서 불러왔긴 때문
 */

@include_once "include2.php";
echo "<br>";
echo "test";
?>