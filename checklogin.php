<?php
/**This file has been re-included in the Development Project Nollaig 2016 folder  **/
include 'PHP/connectTodb.php';

$tbl_name = 'authorizedusers'; // Table name
$myusername = $_REQUEST['username'];
$mypassword = $_REQUEST['password'];
mysqli_select_db($connection, "$db_name")or die("cannot select a DB");
$myusername = stripslashes($myusername);
$mypassword = stripslashes($mypassword);
$myusername = mysqli_real_escape_string($connection, $myusername);
$mypassword = mysqli_real_escape_string($connection, $mypassword);
$sql = "SELECT * FROM $tbl_name WHERE username='$myusername' and password='$mypassword'";
$result = mysqli_query($connection, $sql);
$count = mysqli_num_rows($result);
if ($count == 1) {
    session_start();

    $row = mysqli_fetch_assoc($result);
    $_SESSION['username'] = $myusername;
        $_SESSION['password'] = $mypassword;

    $_SESSION['name'] = $row["name"]; /** Keep this ? it might be useful in personalizing the user experience.....type of thing ? **/
  /*   $_SESSION['week'] = $value; */ /* This is not going to be used but it could be changed to something that might be useful, retain */
    
    header('Location:/DevelopmentProjectNollaig2017/menu.html');
} else {
    header('Location:/DevelopmentProjectNollaig2017/login.html');

    mysqli_close($connection);
}
?>