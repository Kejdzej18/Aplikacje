<?php
abstract class Figure {
    abstract public function Perimeter();
    abstract public function Field();
}
class Triangle extends Figure {
    private $a, $b, $c;
    public function __construct($a, $b, $c) {
        
        $this->a = $a;
        $this->b = $b;
        $this->c = $c;
    }
    public function Perimeter() {

    }
    public function Field() {
        $p = ((1/2)*($this->a+$this->b+$this->c));
        $field = sqrt($p*($p-$this->a)*($p-$this->b)*($p-$this->c));
        return $field;
    }
}
?>