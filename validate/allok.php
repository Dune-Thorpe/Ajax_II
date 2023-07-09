<?php
// Clear any data saved in the session
session_start();
session_destroy();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AJAX Form Validation</title>
    <link rel="stylesheet" href="validate.css">
</head>
<body>
    Registration Successful!<br>
    <a href="index.php" title="Go Back">&lt;&lt; Go Back</a>
</body>
</html>