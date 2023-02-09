<?php 
$str = '<p><br></p><p><img src="/data/daumeditor10/221018/35567916660497720.gif" class="txc-image" width="240" style="""" /></p><p><br></p>';
preg_match_all("/<img([^>]*)>/i",$str, $matches);
// var_export($matches[1]);
// if(true){
// 	var_export('test');
// 	// var_export($board_skin_path);
// }


/* 붙어있는 글자가 부분 글자를 찾는지? */
$str = '자유게시판';
$result = preg_match("/자유게시판입니다/", "$str");
var_export($result);
?>