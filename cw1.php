<?php
Include('./zwierz/pies.php');
Include('./zwierz/kot.php');
Include('./zwierz/lew.php');




$pies = new Pies();
$pies = new Kot();
$pies = new Lew();


echo $pies -> jedz().'<br>';
echo $kot -> jedz().'<br>';
echo $lew -> jedz().'<br>';

?>