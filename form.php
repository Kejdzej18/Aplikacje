<?php
$dbhost = 'localhost';
$dbport = 3306;
$dbname = 'products';
$dbuser = 'root';
$dbpass = '';
$dsn = 'mysql:host='.$dbhost.';port='.$dbport.';dbname='.$dbname; // Data Source Name
try {
    $pdo = new PDO($dsn, $dbuser, $dbpass);
} catch(PDOException $e) {
    echo $e->getMessage();
}
?>
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="get">
        <select name="country" id="country">
            <option value=""> -- Wybierz z listy --</option>
<?php
$stmt = $pdo->prepare('SELECT DISTINCT `country` FROM `users`');
$stmt->execute();
$stmt->setFetchMode(PDO::FETCH_ASSOC);
foreach($stmt->fetchAll() as $key => $value) {
?>
            <option value="<?= $value['country'] ?>"><?= $value['country'] ?></option>
<?php
}
?>
        </select>
        <input type="submit" value="Wykonaj">
    </form>
    <table>
        <tr>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>E-mail</th>
            <th>Adres</th>
        </tr>
<?php
try {
    $stmt = $pdo->prepare('SELECT * FROM `users` WHERE `country` = :country');
    $stmt->bindParam(':country', $country);
    $country = isset($_GET['country']) ? $_GET['country'] : null;
    $stmt->execute();
    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    foreach($stmt->fetchAll() as $key => $value) {
?>
        <tr>
            <td>
                <?= $value['first_name'] ?>
            </td>
            <td>
                <?= $value['last_name'] ?>
            </td>
            <td>
                <?= $value['email'] ?>
            </td>
            <td>
                <?= $value['country'] ?>
                <?= $value['city'] ?>
                <?= $value['street_name'] ?>
            </td>
        </tr>
<?php
    }
} catch(PDOException $e) {
    echo $e->getMessage();
}
?>
    </table>
</body>
</html>
