<?php


$name = 'Тест';
$price = ['320', '560', '990'];
$amount = ['26', '32', '42'];
$measSys = 'CM';


$item = array(
    "orederID" => 12345,
    "shopperName" => "Ваня Иванов",
    "contents" => array(
        array(
            "name" => 'Тест',
            "price" => 550,
        ),
        array(
            "name" => 'Тест2',
            "price" => '150',
        )
    )
);

echo json_encode( $item );

var_dump($item);

$item = json_encode($item);

$file = fopen("newfile.json", "w");
fwrite($file, $item);
fclose($file);


?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/css/admin.css">
</head>
<body>
    <div class="form">
        <form action="" class="form__form">
           <div class="image"><input type="file" name="photo" value="" placeholder="Фото"></div>
           <div class="name"><input type="text" name="name" placeholder="Название"></div>
           <div class="text"><input type="text" name="description" placeholder="Описание"></div>
           <div class="price"><input type="text" name="price" placeholder="Цены"></div>
           <div class="amount"><input type="text" name="amount" placeholder="Количество"></div>
           <div class="measSys"><input type="text" name="measSys" placeholder="Система измерения"></div>
           <div class="submit"><input type="submit" name="submit" value="Отправить"></div>
        </form>
    </div>
</body>
</html>