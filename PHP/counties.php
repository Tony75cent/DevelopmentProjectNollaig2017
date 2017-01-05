<?php 
require 'validateSession.php';
?>
<!--This has been copied into the DevelopmentProjectNollaig2017 folder -->

<!doctype html> 

<html min-height="100%">
    <head>
        <meta charset="utf-8">
        <title>fill with county's</title>
        <link href="CSS/basic.css" rel="stylesheet" type="text/css"/>
        <link href="CSS/tooltip.css" rel="stylesheet" type="text/css"/>
        <link href="CSS/graphs.css" rel="stylesheet" type="text/css"/>
        <link href="css/layout.css" rel="stylesheet" type="text/css"/>
        <script src="JS/d3.v3.js"></script>
        <script src="JS/d3.tip.v0.6.3.js" type="text/javascript"></script>
        <script src="JS/d3pie.js" type="text/javascript"></script>
        <script src="JS/functions.js" type="text/javascript"></script>
        <script src="js/D3_functions.js" type="text/javascript"></script>
        <script language = "javascript"  src= "js/jsfunctions.js"></script>
    </head>
    <!--startup() is in functions.js -->
    <body onload="startup();"> 
        <div class="top">
            <div class="graphicons">
                <fieldset name="graphtype">
                    <input id="piebutton" type="radio" name="pie" checked="checked" onchange="startup();"/>
                    <label for="piebutton" class="pie"><img src="piechart.svg" class="icon"/></label>
                    <input id="barbutton" type="radio" name="pie" onchange="startup();"/>
                    <label for="barbutton" class="bar"><img src="barchart.svg" class="icon"/></label>
                </fieldset>
            </div>
            <h1 style="margin: 5px; text-align: center">County Population by Barony</h1>
        </div>
        <div id="graphs" class="graphs"></div>   
        <div id="focus" class="inactive"></div>
    </body>
</html>
     


