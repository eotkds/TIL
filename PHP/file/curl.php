<?php
    var_export("test");

    if(extension_loaded("curl")){

        echo "cUrl extension is loaded";
    
    }else{
    
     echo "cUrl extension is not available";
    
    }


    /*
    $src = "https://www.landmarket.kr/web/product/big/202212/5775b4b8caa22c9957f9a7359fe812a4.png";

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $src);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); // 문자열로 반환
    $img = curl_exec($ch);
    curl_close($ch);

    var_dump($img);

    */