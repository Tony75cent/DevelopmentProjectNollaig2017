/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function imageSlider() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";
       /** var z = document.getElementById("imagedisplay").innerHTML = setTimeout(imageSlider, 2000); **/

    setTimeout(imageSlider, 2000);  /// Change image every 2 seconds
    /**Note : Use the fade out effect on the images, as it is an attractive effect  **/
}
function registrationAdvice(){
    
    document.getElementById("registerUser").innerHTML="Click this button to register";
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
    var UrlToSend = "php/registerUser.php?newUsername=" + newUsername + "&newPassword=" + newPassword;
    if (window.XMLHttpRequest) {
        var xmlhttp = new XMLHttpRequest();
    } else {
        var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var response = xmlhttp.responseText;
           console.log(response); 
            if (response === "OK") {
                window.location = "index.html "; 


            } else {
                document.getElementById("registrationError").style.display = "block";
            }
            document.getElementById("registrationbutton").disabled = false;

        }
    };
    /*  document.getElementById('registrationForm').value = "";*//*The execution is not reaching this line, the registrationError is being triggered */
    xmlhttp.open("GET", UrlToSend, true);
    xmlhttp.send();// The actual request is now being sent.
    return false;
}

