<?php

Include_once('./zwierz/lew.php');

class Kot extends Zwierze{
    public function jedz(){
        return "kot zjadł";
    }
    public function dajGlos(){
        return "miau";
    }

}
?>