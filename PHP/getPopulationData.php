<?php
include 'validateSession.php';
require 'connectTodb.php';
/** DevelopmentProjectNollaig2017 **/
$tbl_name ='baronies'; // Table name 
mysqli_select_db($connection, "$db_name")or die("cannot select a DB");
/** $countyid = $_GET["countyId"]; **/ /**This line works it has been commented out for testing **/

 $sql ="SELECT `COUNTY_ID`, `GEOGDESC`, `CSOBARNAME`, `Male2011`, `Female2011`, `Total2011` FROM `baronies` WHERE `COUNTY_ID`= '21'";  /** This is the original line **/
/**$sql ="`COUNTY,C,5`,`COUNTYNAME,C,35`,`CSOBARNAME,C,28`,`Total2011,N,20,10`,`Male2011,N,20,10`,`Female2011,N,20,10` FROM `baronies` WHERE `COUNTY,C,5`='21'"; **/
$query = mysqli_query($connection, $sql);

 if (!$query) { 
     echo msqli_error($query);
    die("No valid query present");
   /**  echo msqli_error(); **/ /** This has been commented out for testing**/
 }

$data = array(); /* Data returned from the dB will be stored in this array */
 for ($x = 0; $x < mysqli_num_rows($query); $x++) { 


    $data[] = mysqli_fetch_assoc($query);
}
print( json_encode($data)); // Data is returned in JSON format.
mysqli_close($connection);

