<?php
require 'connectTodb.php';
/** DevelopmentProjectNollaig2017 **/
$tbl_name = "baronys"; // Table name 
mysqli_select_db($connection, "$db_name")or die("cannot select a DB");
$countyid = $_GET["countyId"];

$sql ="SELECT `COUNTY_ID`, `GEOGDESC`, `CSOBARNAME`, `Male2011`, `Female2011`, `Total2011` FROM `baronys` WHERE `COUNTY_ID`=".$countyid;
$query = mysqli_query($connection, $sql);
if (!$query) {
    echo msqli_error();
    die("no viable  query present");
}

$data = array(); /* Data returned from the dB will be stored in this array */
for ($x = 0; $x < mysqli_num_rows($query); $x++) {

    $data[] = mysqli_fetch_assoc($query);
}
print( json_encode($data)); // Data is returned in JSON format.
mysqli_close($connection);
?>
