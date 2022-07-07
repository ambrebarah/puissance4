<?php
$tab[0][0] = "a" ;
$tab[0][1] = "b" ;
$tab[0][2] = "c" ;
$tab[0][3] = "d" ;

$tab[][]='efg';
 
for($i=0;$i<count($tab[1]); $i++)
{
echo($tab[1][$i]."\n");
}