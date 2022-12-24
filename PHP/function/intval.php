<?php
    $num_string = "1000000";
    $num_int= (int)$num_string;

    $intval_num = intval($num_string);

    $format_num = number_format($num_string);

    echo $num_int;
    echo "<br />";
    echo $intval_num;
    echo "<br />";
    echo $format_num;
    echo "<br />";
