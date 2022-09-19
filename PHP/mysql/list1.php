<?php
$conn = new mysqli('localhost', 'root', 'root7981', 'opentutorials');

$list_result = $conn->query('SELECT * FROM topic');
?>
<ul> 
<?php
/*
$row = $list_result-> fetch_array(MYSQLI_BOTH);
echo '<li>'.$row['title'].'</li>';

$row = $list_result-> fetch_array(MYSQLI_BOTH);
echo '<li>'.$row['title'].'</li>';
*/
?>
</ul>
<?php
// exit;
if(!empty($_GET['id'])) {
    $topic_result = $conn->query('SELECT * FROM topic WHERE id = '.mysqli_real_escape_string($conn, $_GET['id']));
    $topic = $topic_result-> fetch_array(MYSQLI_BOTH);
}
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <style type="text/css">
            body {
                font-size: 0.8em;
                font-family: dotum;
                line-height: 1.6em;
            }
            header {
                border-bottom: 1px solid #ccc;
                padding: 20px 0;
            }
            nav {
                float: left;
                margin-right: 20px;
                min-height: 1000px;
                min-width:150px;
                border-right: 1px solid #ccc;
            }
            nav ul {
                list-style: none;
                padding-left: 0;
                padding-right: 20px;
            }
            article {
                float: left;
            }
            .description{
                width:500px;
            }
        </style>
    </head>
   
    <body id="body">
        <div>
            <nav>
                <ul>
                    <?php
                    while($row = $list_result-> fetch_array(MYSQLI_BOTH)) {
                        echo "<li><a href=\"?id={$row['id']}\">".htmlspecialchars($row['title'])."</a></li>";                        
                    }
                    ?>
                </ul>
                <ul>
                    <li><a href="input.php">추가</a></li>
                </ul>
            </nav>
            <article>
                <?php
                if(!empty($topic)){
                ?>
                <h2><?=htmlspecialchars($topic['title'])?></h2>
                <div class="description">
                    <?=htmlspecialchars($topic['description'])?>
                </div>
                <div>
                    <a href="modify.php?id=<?=$topic['id']?>">수정</a>
                    <form method="POST" action="process1.php?mode=delete">
                        <input type="hidden" name="id" value="<?=$topic['id']?>" />
                        <input type="submit" value="삭제" />
                    </form>
                </div>
                <?php
                }
                ?>
            </article>
        </div>
    </body>
</html>