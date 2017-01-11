/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * This file is in the DevelopmentProjectNollaig2017 folder
 */


function imageSlider() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";

    setTimeout(imageSlider, 2000);  /// Change image every 2 seconds
}
function registrationAdvice() {

    document.getElementById("registerUser").innerHTML = "Click this button to register";
}


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*Function registerUser:
 * The flow of execution proceeds as expected until line 21, at which 
 * point it halts.The input username/password fields revert to their initial values.
 * The input password/username is saved to the database. 
 * The returned "OK"  value is not reckognized and the flow,halts.*/
/* The above are notes which were imported along with the code from an earlier iteration of Development
 * Project, they may or may not be relevant 28.12.16*/
function registerUser() {
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;
    /*  console.log("newUsername: " + newUsername + " newPassword: " + newPassword); */

    document.getElementById("registrationbutton").disabled = true;
    var UrlToSend = "PHP/registerUser.php?newUsername=" + newUsername + "&newPassword=" + newPassword;

    if (window.XMLHttpRequest) {
        var xmlhttp = new XMLHttpRequest();
    } else {
        var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var response = xmlhttp.statusText; /** The statusText produces the correct result, that is when "OK" is echoed from the php,the flow of execution directs the "program" to login.php. A problem to be solved (later, not of prime importance) is that nothing is being registered in the console.log(response)Were small but significent changes made to the code externally ? The status of the php operation is being returned ie success or failure, that is what the statusText is responding to, not an arbritary string being echoed. **/
            console.log(response);   /** Comment this out temprorarily to see if it changes the execution **/
            if (response === "OK") {/**I am going to try OK  without the enclosing quote marks to see what happens **/
                /** window.location = "index.html "; **/
                window.location = "login.php";



            } else {
                document.getElementById("registrationError").style.display = "block";
            }
            document.getElementById("registrationbutton").disabled = false;

        }
    };
    /*  document.getElementById('registrationForm').value = "";*//*The execution is not reaching this line, the registrationError is being triggered */
    xmlhttp.open('GET' , UrlToSend, true); /**The original GET was working. The code stopped working when it was transferred as the addressing  started with   PHP/php...instad of being changed to  PHP/  **/
    xmlhttp.send();// The actual request is now being sent.
    return false;
}

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function startup() {
    var graphs = document.getElementById("graphs");
    tip = d3.tip()
            .attr('class', 'd3-tip')
            .offset([-10, 0])
            .html(function (d) {
                return "<strong>Population:</strong><span style='color:red'>" + d.value + "</span>";
            });
    /* For loop */
    for (i = 1; i < 31; i++) {
        var div = document.getElementById("graph" + i);
        if (div === null) {
            div = document.createElement("div");
            div.setAttribute("id", "graph" + i);
            div.setAttribute("class", "svg-container");
            div.setAttribute("tabindex", "0");
            div.setAttribute("onclick", "graphClicked(this)");
            graphs.appendChild(div);
        }
        var img = document.createElement("img");
        img.setAttribute("src", "load.svg");
        div.appendChild(img);
        graphs.appendChild(div);
        getPopulationByCounty(i, div.getAttribute("id"));
    }
}

function graphClicked(graph) {
    var graphId = graph.getAttribute("id");
    var countyId = graphId.substring(5);
    console.log(countyId);
    var focus = document.getElementById("focus");
    focus.innerHTML = "";
    element = document.createElement("div");
    element.setAttribute("class", "close");
    element.setAttribute("onclick", "focusOff()");
    element.setAttribute("tabindex", "0");
    focus.appendChild(element);
    getPopulationByCounty(countyId, "focus");
    focus.setAttribute("class", "active");
}

function focusOff(element) {
    document.getElementById("focus").setAttribute("class", "inactive");
}

// JavaScript Document
/*
 * Function name :getPopulationByCounty
 * 
 * 
 * 
 * Parameters: 
 * countyid:  
 * 
 * 
 * elementId;
 * 
 */




function getPopulationByCounty(countyid, elementId) {
    if (typeof countyid === "undefined") {
        countyid = document.getElementById('selectCounty').value;
    }
    if (window.XMLHttpRequest) {
        var xmlhttp = new XMLHttpRequest();
    } else {
        var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var PageToSendTo = "getPopulationData.php";
    var VariablePlaceholder = "?countyId=";
    var myVariable = countyid;
    var UrlToSend = PageToSendTo + VariablePlaceholder + myVariable;
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var dataReturn = JSON.parse(xmlhttp.responseText);
            var data = [];
            for (i = 0; i < dataReturn.length; i++) {
                data.push({countyid: dataReturn[i].COUNTY_ID,
                    county: dataReturn[i].GEOGDESC,
                    barony: dataReturn[i].CSOBARNAME,
                    value: +dataReturn[i].Total2011,
                    male: +dataReturn[i].Male2011,
                    female2011: +dataReturn[i].Female2011});
            }
                if (document.getElementById("piebutton").checked) {
                    createPieChart(data, elementId);
                }
                if (document.getElementById("barbutton").checked) {
                    createBarChart(data, elementId);
                }
        }
    };
    xmlhttp.open("GET", UrlToSend, true);
    xmlhttp.send();// The actual request is now being sent.
}
function registerUser() {

    document.getElementById("registerbutton").setAttribute("onclick", reDirect());





}
function reDirect() {


    window.location = "php/registerNewUser.php";




}
/*
 * Function name :getHousingVacancy
 * 
 * 
 * 
 * Parameters: 
 * countyid:  
 * 
 * 
 * elementId;
 * 
 */
function getHousingVacancy(countyid, elementId) {
    if (typeof countyid === "undefined") {
        countyid = document.getElementById('selectCounty').value;
    }
    if (window.XMLHttpRequest) {
        var xmlhttp = new XMLHttpRequest();
    } else {
        var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var PageToSendTo = "PHP/getHousingVacancy.php";

    var VariablePlaceholder = "?countyId=";
    var myVariable = countyid;
    var UrlToSend = PageToSendTo + VariablePlaceholder + myVariable;
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var dataReturn2 = JSON.parse(xmlhttp.responseText);
            console.log(dataReturn2);
            var data2 = [];
            for (i = 0; i < dataReturn2.length; i++) {
                data2.push({countyid: dataReturn2[i].COUNTY_ID,
                    county: dataReturn2[i].GEOGDESC,
                    label: dataReturn2[i].CSOBARNAME,
                    value: +dataReturn2[i].TOTAL_HOUSING_STOCK,
                    vacancyRate: +dataReturn2[i].VACANCY_RATE});
            }
            if (document.getElementById("piebutton2").checked) {
                createPieChart2(data2, elementId);
            }
            if (document.getElementById("barbutton2").checked) {
                createBarChart2(data2, elementId);
            }
        }
    };
    xmlhttp.open("GET", UrlToSend, true);
    xmlhttp.send();// The actual request is now being sent.
}






