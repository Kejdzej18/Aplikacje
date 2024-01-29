<?php
class JakasKlasaObiektow {
    public $pole_1;
    public $pole_2;
    public $pole_3;
}
$obiekt_1 = new JakasKlasaObiektow();
$obiekt_3 = new JakasKlasaObiektow();
$obiekt_1->pole_1 = 3;
$obiekt_1->pole_2 = 4;
$obiekt_1->pole_3 = 5;
$obiekt_2 = $obiekt_1;
var_dump($obiekt_1);
echo "<br>";
var_dump($obiekt_2);
echo "<br>";
var_dump($obiekt_3);
echo "<br>";
$obiekt_2->pole_1 = "Ala";
var_dump($obiekt_1);
echo "<br>";
var_dump($obiekt_2);
echo "<br>";
$jakisTekst = "Ala ma kota, sierotka ma rysia";
echo $jakisTekst;
echo "<br>";
$fragmentTekstu = substr($jakisTekst, 4, 2);
echo $jakisTekst;
echo "<br>";
echo $fragmentTekstu;
?>