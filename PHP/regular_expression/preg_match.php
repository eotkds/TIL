<?php 
$str = '<p><br></p><p><img src="/data/daumeditor10/221018/35567916660497720.gif" class="txc-image" width="240" style="""" /></p><p><br></p>';
preg_match_all("/<img([^>]*)>/i",$str, $matches);
var_export($matches[1]);


if(true){
	var_export('test');
	// var_export($board_skin_path);
}
?>