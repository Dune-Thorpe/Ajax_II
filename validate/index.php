<?php
require_once('index_top.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Degradable AJAX Form Validation with PHP and MySQL</title>
    <link rel="stylesheet" href="validate.css">
</head>
<body onload="setFocus();">
<script src="json2.js"></script>
<script src="xhr.js"></script>
<script src="validate.js"></script>
<fieldset>
    <legend class="txtFormLegend">
        New User Registration Form
    </legend>
    <br>
    <form name="frmRegistration" action="validate.php" method="POST">
        <input type="hidden" name="validationType" value="php">
        <!-- Username-->
        <label for="txtUserName">Desired username:</label>
        <input type="text" name="txtUserName" id="txtUserName"
               
                value="<?php echo $_SESSION['values']
                        ['txtUserName']?>">
        <span id="txtUserNameFailed"
              class="<?php echo $_SESSION['errors']['txtUserName']?>">
              This username is in use, or empty username field.
        </span> 
        <br>
        <!-- Name -->
        <label for="txtName">Your Name:</label>
        <input type="text" name="txtName" id="txtName"
                
                value="<?php echo $_SESSION['values']['txtName']?>">
        <span id="txtNameFailed"
                class="<?php echo $_SESSION['errors']['txtName']?>">
                Please enter your name.
        </span>
        <br>
        <!-- Gender -->
        <label for="selGender">Gender:</label>
        <select name="selGender" id="selGender"
                >
                <?php buildOptions($genderOptions, $_SESSION['values']['selGender']);?>
            </select>
        <span id="selGenderFailed"
                class="<?php echo $_SESSION['errors']['selGender']?>">
                Please select your gender.
            </span>
        <br>
        <!-- Birthday -->
        <label for="selBthMonth">Birthday:</label>
        <!-- Month -->
        <select name="selBthMonth" id="selBthMonth"
                >
                <?php buildOptions($monthOptions,$_SESSION['values']['selBthMonth']);?>
        </select>
        &nbsp;-&nbsp;
        <!-- Day -->
        <input type="text" name="txtBthDay" id="txtBthDay" maxlength="2" size="2"
                 
                value="<?php echo $_SESSION['values']['txtBthDay']?>">
        &nbsp;-&nbsp;
        <!-- Year -->
        <input type="text" name="txtBthYear" id="txtBthYear" maxlength="4" size="4"
                
                value="<?php echo $_SESSION['values']['txtBthYear']?>">
        <!-- Month, Day, Year validation -->
        <span id="selBthMonthFailed"
                class="<?php echo $_SESSION['errors']['selBthMonth']?>">
                Please select your birth month.
        </span>
        <span id="txtBthDayFailed"
                class="<?php echo $_SESSION['errors']['txtBthDay']?>">
                Please enter your birth day.
        </span>
        <span id="txtBthYearFailed"
                class="<?php echo $_SESSION['errors']['txtBthYear']?>">
                Please enter a valid date.
        </span>
        <br>
        <!-- Email -->
        <label for="txtEmail">E-mail:</label>
        <input type="text" name="txtEmail" id="txtEmail"
                
                value="<?php echo $_SESSION['values']['txtEmail']?>">
        <span id="txtEmailFailed"
                class="<?php echo $_SESSION['errors']['txtEmail']?>">
                Invalid email address.
        </span>
        <br>
        <!-- Phone number-->
        <label for="txtPhone">Phone number:</label>
        <input type="text" name="txtPhone" id="txtPhone"
                
                value="<?php echo $_SESSION['values']['txtPhone']?>">
        <span id="txtPhoneFailed"
                class="<?php echo $_SESSION['errors']['txtPhone']?>">
            Please insert a valid US phone number (xxx-xxx-xxxx).
        </span>
        <br>
        <!-- Read terms checkbox -->
        <input type="checkbox" id="chkReadTerms"
                name="chkReadTerms" class="left"
                
                <?php if ($_SESSION['values']['chkReadTerms'] == 'on') echo 'checked="checked"'?>>
        I've read the Terms of Use
        <span id="chkReadTermsFailed"
                class="<?php echo $_SESSION['errors']['chkReadTerms']?>">
                Please make sure you read the Terms of Use.
        </span>
        <!-- End of Form-->
        <hr>
        <span class="txtSmall">Note: All fields are required.</span>
        <br><br>
        <input type="submit" name="submitbutton" value="Register" class="left button">    
    </form>
</fieldset>
</body>
</html>