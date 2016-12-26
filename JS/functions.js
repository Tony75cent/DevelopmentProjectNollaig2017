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




