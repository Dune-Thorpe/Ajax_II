<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practical AJAX: Working with PHP and MySQL</title>
</head>
<body>
    <?php
    require_once('error_handler.php');
    require_once('config.php');
    $mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);
    $query = 'SELECT user_id, user_name FROM users';
    $result = $mysqli->query($query);
    while ($row = $result->fetch_array(MYSQLI_ASSOC))
        {
            $user_id = $row['user_id'];
            $user_name = $row['user_name'];
            echo 'Name of user # ' . $user_id . ' is ' . $user_name . '<br><br>';
        }
    $result->close();
    $mysqli->close();
    ?>
</body>
</html>