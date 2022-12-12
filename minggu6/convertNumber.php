<?php
function convertAngka($number)
{
	 $number = intval($number);
	 $result = '';
	 
	 $array = array('M' => 1000,
	 'D' => 500,
	 'C' => 100,
	 'L' => 50,
	 'X' => 10,
	 'V' => 5,
	 'I' => 1);
	 
	 foreach($array as $romawi => $value){
	  $matches = intval($number/$value);
	 
	  $result .= str_repeat($romawi,$matches);
	 
	  $number = $number % $value;
	 } 
	 return $result;
}
	echo convertAngka(2022);
?>