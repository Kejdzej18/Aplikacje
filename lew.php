<?php

Include_once('./zwierz/lew.php');

class Lew extends Zwierze{
    public function jedz(){
        return "lew zjadł";
    }
    public function dajGlos(){
        return "roar";
    }

}
?>