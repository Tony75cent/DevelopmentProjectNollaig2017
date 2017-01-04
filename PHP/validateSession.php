<?php
session_start(true);
if (!isset($_SESSION['username'])) {
   
        header('Location:/DevelopmentProjectNollaig2017/login.html');
        exit();
        /** This file is in the DevelopmentProjectNollaig2017 file **/
 
}


