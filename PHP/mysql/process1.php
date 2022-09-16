<?php
$conn = mysqli_connect('localhost', 'root', 'root7981');
mysqli_select_db($conn, 'opentutorials');
switch($_GET['mode']){
    case 'insert':
        $sql ="INSERT INTO topic (title, description, created) VALUES ('".mysqli_real_escape_string($conn, $_POST['title'])."', '".mysqli_real_escape_string($conn, $_POST['description'])."', now())";
        echo $sql;
        echo "<br />";
        echo $_POST["title"];
        echo "<br />";
        echo $_POST["description"];

        $result = mysqli_query($conn, $sql);

        // mysqli_close($conn);
        // header("Location: list.php"); 
        break;
    case 'delete':
        mysqli_query($conn, 'DELETE FROM topic WHERE id = '.mysqli_real_escape_string($conn, $_POST['id']));
        header("Location: list.php"); 
        break;
    case 'modify':
        mysqli_query($conn, 'UPDATE topic SET title = "'.mysqli_real_escape_string($conn, $_POST['title']).'", description = "'.mysqli_real_escape_string($conn, $_POST['description']).'" WHERE id = '.mysqli_real_escape_string($conn, $_POST['id']));
        header("Location: list.php?id={$_POST['id']}");
        break;
}
?>