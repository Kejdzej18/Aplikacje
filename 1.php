<?php
include_once('./database.php');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="./form_insert.php" method="post">
        <div>
            <div><label for="prod_name">Nazwa</label></div>
            <div>
                <input type="text" name="prod_name" id="prod_name">
            </div>
        </div>
        <div>
            <div><label for="price">Cena</label></div>
            <div>
                <input type="number" min="0" step="0.01" name="price" id="price">
            </div>
        </div>
        <div>
            <div><label for="quantity">Ilość</label></div>
            <div>
                <input type="number" min="0" name="quantity" id="quantity">
            </div>
        </div>
        <div>
            <input type="submit" value="Zapisz">
            <input type="reset" value="Wyczyść">
        </div>
    </form>

    <div>
        <table>
            <tr>
                <th>Lp</th>
                <th>Nazwa</th>
                <th>Cena</th>
                <th>Ilość</th>
                <th>Akcje</th>
            </tr>
<?php
    $query = 'SELECT * FROM `products`';
    $stmt = $pdo->prepare($query);
    $stmt->execute();
    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    foreach($stmt->fetchAll() as $key => $value){
?>
        <tr>
            <td><?= $key + 1 ?></td>
            <td><?= $value['prod_name'] ?></td>
            <td><?=$value['price']?></td>
            <td><?=$value['quantity']?></td>
            <td></td>
        </tr>
<?php 
    }
?>
        </table>
    </div>
</body>

</html>