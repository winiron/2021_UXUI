<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <? 
        echo $_GET["name"];
        echo $_GET["email"];
        ?>
        <br>
        <h2>안녕하세요 <? echo $_GET["name"]; ?> 입니다. 반갑습니다.</h2>
    </body>
</html>