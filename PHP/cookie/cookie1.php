<?php
    setCookie('cookie1', '생활코딩');
    setCookie('cookie2', time(), time()+60);
?>
<html>
<body>
    <?php
        print_r($_COOKIE['cookie1']);
    ?>

</body>

</html>