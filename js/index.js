
// POPUP GLOBAL CLOSE 
const closeIcon = document.querySelectorAll(".popup-content .popup-main .fa-times");
closeIcon.forEach((element)=>{
    element.addEventListener('click',function(){
        $(element.parentElement.parentElement).fadeOut();
    });
});

// CLOSE ALL POPUP
function closeAllPopup(){
   document.querySelectorAll(".popup-content").forEach((element)=>{
       $(element).hide();
   })
}

// REGISTER  POPUP OPEN FUNCTION
function registerPopupOpen(){
    closeAllPopup();
    $(".popup-content.popup-register").fadeIn();
}

//SIGN-IN POPUP OPEN FUNCTION
function signInPopupOpen(){
    closeAllPopup();
    $(".popup-content.popup-sign-in").fadeIn();
}

// REGISTER BUTTON CLICK
const registerBtn = document.getElementById("register-btn");
registerBtn.addEventListener('click',function(e){
    e.preventDefault();
    registerPopupOpen();
});
// SIGN-IN BUTTON CLICK
const signInBtn = document.getElementById("sign-in-btn");
signInBtn.addEventListener('click',function(e){
    e.preventDefault();
    signInPopupOpen();
});