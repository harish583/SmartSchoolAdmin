function initializeSuccess() {
    initializeBarChart();
    initializeComponent2();
    initializeComponent3();
    initializeComponent4();
    initializeComponent5();

    document.getElementsByClassName("fas fa-power-off")[0].addEventListener("click",logout);
}
function loginSuccess(){
    document.getElementById("login-success").style.display="block";
    document.getElementById("login-component").style.display="none";
    document.getElementById("username").value='';
    document.getElementById("Password").value='';
    initializeSuccess()
    conformFalse();
}
function conformFalse(){

    document.getElementById("popup").style.display="none";
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}
function logout(){

    document.getElementById("popup").style.display="block";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    document.getElementsByClassName("popup-content")[0].innerHTML = "are you want to closing the account <div><button class='conform-to-logout-false'>No , Cancel</button>"+
    "<button class='conform-to-logout-true'>Yes , logout</button></div>";
    document.getElementsByClassName("conform-to-logout-false")[0].addEventListener("click",conformFalse);
    document.getElementsByClassName("conform-to-logout-true")[0].addEventListener("click",conformTrue);
}    
function conformTrue(){
    document.getElementById("login-success").style.display="none";
    document.getElementById("login-component").style.display="block";
}
function loginClicked(){



    var username = document.getElementById("username").value;
    var password = document.getElementById("Password").value;
    if(username === "Superadmin" && password === "7469"){
        loginSuccess()
    }
    else {
        alert("Enter correct matching pair");
    }
}
function messageBox(){

    document.getElementById("popup").style.display="block";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    document.getElementsByClassName("popup-content")[0].innerHTML = "message component coming soon..."
}
function forgetPassword(){
    alert("not yet created forgotPassword component it's coming soon.....")
    document.getElementById("popup").style.display="block";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    document.getElementsByClassName("popup-content")[0].innerHTML = " content coming sooon...."
}
document.getElementById("login-button").addEventListener("click",loginClicked);
document.getElementsByClassName("Forgot-password")[0].addEventListener("click",forgetPassword);
document.getElementsByClassName("fa-envelope")[0].addEventListener("click",messageBox);