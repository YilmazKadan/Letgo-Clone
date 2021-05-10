
const barIcon = document.querySelector("#bar-icon");
const navigationMain = document.querySelector(".navigation-main");

const blackPanel = document.querySelector(".black-panel");
const openPopupButton = document.querySelectorAll("[data-popup-target]");
const closePopupButton = document.querySelectorAll("[data-close-popup]");

// OPEN POPUP
openPopupButton.forEach(element => {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        console.log("Merhaba");
        const thisPopup = document.querySelector(element.dataset.popupTarget);
        console.log(thisPopup);
        popupOpen(thisPopup);
    })
})

// POPUP OPEN
function popupOpen(popup) {
    if (popup == null) return;
    closeAllPopup();
    navigationClose();
    document.body.classList.add('no-scroll');
    popup.classList.add("active");
    blackPanel.classList.add("active");

}
// CLOSE POPUP
closePopupButton.forEach(element => {
    element.addEventListener('click', function () {
        console.log("merhaba");
        const popup = element.closest('.popup');
        console.log(popup);
        popup.classList.remove('active');
        blackPanel.classList.remove('active');
    });
})

// OUTSIDE CLICK OF BLACK-PANEL
blackPanel.addEventListener('click', function () {
    this.classList.remove('active');
    document.body.classList.remove('no-scroll');
    navigationClose();
    closeAllPopup();
})

// CLOSE ALL POPUP
function closeAllPopup() {
    document.querySelectorAll(".popup.active").forEach((element) => {
        element.classList.remove("active");
    })
}
// NAVIGATION MENU OPEN FUNCTION
function navigationOpen() {
    blackPanel.classList.add('active');
    document.body.classList.add('no-scroll');
    $(".navigation-main").addClass("open");
}
// NAVIGATION MENU CLOSE FUNCTION
function navigationClose() {
    $(".navigation-main").removeClass("open");
}
// BAR ICON CLICK
barIcon.addEventListener('click', function () {
    navigationOpen();
});

//  CHAT PAGE SCRIPTS-----------------------------------------------------------------------------------------

// CHAT TRANSFORM
const chatUser = document.querySelectorAll(".user-list .user");
const chatContainer = document.querySelector("section.message .container");
const arrowLeft = document.querySelector('.message-header .left-info .fa-arrow-left')
const messageArea = document.querySelector(".right .message-area");
const backgroundDiv = document.querySelector(".right .background");

chatUser.forEach((element) => {
    element.addEventListener('click', function () {

        chatTransform("left");
        messageArea.classList.add("active");
        backgroundDiv.classList.add("deactive");
    })
})

if (arrowLeft) arrowLeft.addEventListener('click', function () {
    chatTransform("right");
})
//Chat transform function
function chatTransform(position) {
    if (position == "left")
        chatContainer.classList.add("transform-left");
    else if (position == "right")
        chatContainer.classList.remove("transform-left");
    else
        return;
}