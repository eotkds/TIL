<?php
$conn = new mysqli('localhost', 'root', 'root7981','opentutorials');
switch($_GET['mode']){
    case 'insert':
        $sql ="INSERT INTO topi (title, description, created) VALUES ('".mysqli_real_escape_string($conn, $_POST['title'])."', '".mysqli_real_escape_string($conn, $_POST['description'])."', now())";

        $result = $conn -> query($sql);
        echo $conn -> connect_errno."<br />";
        echo $conn -> error;
        exit();
        // $conn -> close();
        header("Location: list1.php"); 
        break;
    case 'delete':
        $sql = 'DELETE FROM topic WHERE id = '.mysqli_real_escape_string($conn, $_POST['id']);
        $conn->query($sql);
        header("Location: list1.php"); 
        break;
    case 'modify':
        $sql = "UPDATE topic SET title = '".mysqli_real_escape_string($conn, $_POST['title'])."', description = '".mysqli_real_escape_string($conn, $_POST['description'])."' WHERE id = ".mysqli_real_escape_string($conn, $_POST['id']);
        $conn -> query($sql);
        header("Location: list1.php?id={$_POST['id']}");
        break;
}
?>