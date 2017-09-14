<?
$data = json_decode(file_get_contents("php://input"));

$name = mysql_real_escape_string($data->name);
$email = mysql_real_escape_string($data->email);
$comment = mysql_real_escape_string($data->comment);

mysql_connect("localhost","root","");
mysql_select_db("comment");
mysql_query("INSERT INTO comments(`Name`, `Email`, `Comment`)VALUES('".$name."','".$email."','".$comment."')");


?>

