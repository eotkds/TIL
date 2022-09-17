<?php
if (preg_match("/php/i", "PHP is the web scripting language of choice.")) {
    echo "A match was found.";
} else {
    echo "A match was not found.";
}
echo "<br />";
?>

<?php
if (preg_match("/\bweb\b/i", "PHP is the web scripting language of choice.")) {
    echo "A match was found.";
} else {
    echo "A match was not found.";
}
echo "<br />";
if (preg_match("/\bweb\b/i", "PHP is the website scripting language of choice.")) {
    echo "A match was found.";
} else {
    echo "A match was not found.";
}
echo "<br />";
?>

<?php
$subject = 'coding everybody http://opentutorials.org egoing@egoing.com 010-0000-0000';
preg_match('~(http://\w+\.\w+)\s(\w+@\w+\.\w+)\s*(\d{3}\-\d{3,4}\-\d{4})~', $subject, $match);
var_dump($match);
echo "<br />";
echo "homepage:".$match[1];
echo "<br />";
echo "email:".$match[2];
echo "<br />";
echo "phone:".$match[3];
echo "<br />";
?>

<?php
// get host name from URL
preg_match('@^(?:http://)?([^/]+)@i',
    "http://www.php.net/index.html", $matches); #?: -> sub pattern; $matches변수에 넣지 않는다.
$host = $matches[1];
echo $host;
echo "<br />";
var_dump($matches);
echo "<br />";
// echo $matches[2];
echo "<br />";
echo "<br />";
 
// get last two segments of host name
preg_match('/[^.]+\.[^.]+$/', $host, $matches);
echo "domain name is: {$matches[0]}\n";
?>

<?php
 
$str = 'foobar: 2008';
 
preg_match('/(?P<name>\w+): (?P<digit>\d+)/', $str, $matches);
 
/* This also works in PHP 5.2.2 (PCRE 7.0) and later, however 
 * the above form is recommended for backwards compatibility */
// preg_match('/(?<name>\w+): (?<digit>\d+)/', $str, $matches);
 
print_r($matches);
echo "<br />";

?>
<?php
$string = 'April 15, 2003';
$pattern = '/(\w+) (\d+), (\d+)/i';
$replacement = '${1}1,${3}';
echo preg_replace($pattern, $replacement, $string);
echo "<br />";
?>

<?php
$string = 'The quick brown fox jumped over the lazy dog.';
$patterns = array();
$patterns[0] = '/quick/';
$patterns[1] = '/brown/';
$patterns[2] = '/fox/';
$replacements = array();
$replacements[2] = 'bear';
$replacements[1] = 'black';
$replacements[0] = 'slow';
echo preg_replace($patterns, $replacements, $string);
echo "<br />";
?>

<?php
$patterns = array ('/(19|20)(\d{2})-(\d{1,2})-(\d{1,2})/',
                   '/^\s*{(\w+)}\s*=/');
$replace = array ('\3/\4/\1\2', '$\1 =');
// $startDate = 5/27/1999
echo preg_replace($patterns, $replace, '{startDate} = 1999-5-27');
?>