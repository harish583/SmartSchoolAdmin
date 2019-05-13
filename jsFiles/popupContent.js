


function closePopup(){
    document.getElementById("popup").style.display="none";

    document.getElementsByTagName("body")[0].style.overflow = "auto";
}
function footerIconClicked(e){
    var x = e.target.dataset.value;
    document.getElementById("popup").style.display="block";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    document.getElementsByClassName("popup-content")[0].innerHTML = x +" content coming sooon...."
}
function loading(){
    var popupCross = document.getElementById("popup-cross")
    popupCross.addEventListener("click",closePopup);
    var footerIcons = document.getElementsByClassName("footer-icons");
    for(var x =0 ;x<footerIcons.length;x++){
        footerIcons[x].addEventListener("click",footerIconClicked);
    }
}
loading();