<?php

require 'configuration.php';
/* * This file has been re-included in the Dewvelopment Project Nollaig 2016 folder  * */


$connection = mysqli_connect($host, $username, $password)or die("cannot connect");
mysqli_select_db($connection, $db_name)or die("cannot select a Db");
?>
   