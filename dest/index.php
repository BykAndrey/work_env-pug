<?php
echo "<p>Список сверстанных страниц:</p>";
$url = $_SERVER['REQUEST_URI'];
$dir    = dirname(__FILE__);
$files = scandir($dir);
echo '<ol>';
foreach ($files as $value){
	if ($value !='.' and $value !='..' and strpos($value, '.html') > 0) {
		echo '<li><a href="'.$url.$value.'">'.$value.'</a></li>';
	} 
}
echo '</ol>';
?>