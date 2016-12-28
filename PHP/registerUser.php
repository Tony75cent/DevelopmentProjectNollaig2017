<?php

require 'connectTodb.php';/**'database.php';  **/ 
/* require 'session.php'; */
/*This is the DevelopmentProjectNollaig2017 folder */
/*28-12-2016 This code has been imported from an earlier iteration of Development Project. It may need to be amended
 *  */
$tbl_name = "authorizedusers"; // Table name
$myusername = $_REQUEST['newUsername'];
$mypassword = $_REQUEST['newPassword'];
mysqli_select_db($connection, "$db_name")or die("cannot select a DB");
$myusername = stripslashes($myusername);
$mypassword = stripslashes($mypassword);
$myusername = mysqli_real_escape_string($connection, $myusername);
$mypassword = mysqli_real_escape_string($connection, $mypassword);
 $sql = "INSERT INTO $tbl_name(username,password) VALUES('$myusername','$mypassword')"; 





$result = mysqli_query($connection, $sql);

if ($result) {

    echo "OK";  
} else {
    echo "FAIL";
        
}


