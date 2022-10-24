<html>
        <head>
                <meta http-equiv="Content-Type" content="text/html;charset=utf-8" >
        </head>
        <body>
                <?php
                //REQUEST 방식은 GET, POST 받은 것을 array에 저장한다.
                echo $_REQUEST['nickname'].'님의 직업은 '.$_REQUEST['job'].'이군요!';
                echo "<br />";
                var_export($_REQUEST);
                ?>
        </body>
</html>