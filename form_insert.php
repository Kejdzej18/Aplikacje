<?php
include_once('./database.php');
try {
    $query = 'INSERT INTO `products` (`prod_name`, `price`, `quantity`) VALUES (:prod_name, :price, :quantity)';
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':prod_name', $_POST['prod_name'], PDO::PARAM_STR);
    $stmt->bindParam(':price', $_POST['price'], PDO::PARAM_STR);
    $stmt->bindParam(':quantity', $_POST['quantity'], PDO::PARAM_STR);
    if($_POST['prod_name'] != '' && $_POST['price'] != '' && $_POST['quantity'] != '')
        $stmt->execute();
    else {
        throw new Exception('Wypełnij wszystkie pola formularza');
    }
} catch (PDOException $e) {
    echo $e->getMessage();
} catch (Exception $e) {
    echo $e->getMessage();
}
// header('Location: index.php');
?>