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
    setTimeout(carousel, 2000); // Change image every 2 seconds
    /**Note : Use the fade out effect on the images, as it is an attractive effect  **/
}
function passwordReqMsg(){
    document.getElementById("passwordReq").style.display = "block";
    /** Unlikely that this will be used, amend or delete in final edit 23.12.16 **/
    
}



