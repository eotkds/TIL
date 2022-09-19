<html>

<body>
<?php 
$g4['path'] = "./"

?>
<div class='box_hit_aside'>    
    <a href='<?=$g4['path']?>/bbs/hit.php' class='more_button title_hit_aside'>
        <span><img src='<?php echo $g4['path'];?>/img/hit_icon.png' class='hit_icon'>인기게시판</span>
        <span class='more_text'>더보기</span>
    </a>
    <?php for($i=0; $i<5; $i++) : ?>
        <?php
            $main1[$i][0] = str_replace("./bbs/", "/bbs/", $main1[$i][0]);
            print_r($main1);
            echo "<br />";
            if(strpos($main1[$i][6], "hit/list_thumb") !== false){
                $main1[$i][5] = str_replace("./data", "/data", $main1[$i][5]);
            }
        
            if(!$main1[$i][5]){
                if($saving_mode){
                    // $main1[$i][5] = "{$g4[path]}/img/no_image_black3.png";
                    echo "saving_mode.<br />";
                }else{
                    // $main1[$i][5] = "{$g4[path]}/img/no_image_white3.jpg";
                    echo "not_saving_mode.<br />";
                }
            }
        ?>
        <a href='<?=$main1[$i][0]?>' class='list_hit_aside'>
            <img src='/cdn-cgi/image/width=58,height=33,fit=cover,fit=crop,gravity=auto,anim=false,quality=100<?=$main1[$i][5]?>?23' style='display:block; border: 1px solid #dadada;'>
            
            <div class='subject'>
                <span class='text'><?=stripslashes($main1[$i][1])?></span>
                <span class='comment_cnt'><?=$main1[$i][4]?></span>
            </div>
        </a>        
    <?php endfor; ?>	
</div>

</body>
</html>