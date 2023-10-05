function scrollToElement(elementSelector, instance = 0){
    //Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    //Check if there are elements matching the selector and if the requested instance exists.
    if(elements.length > instance){
        //Scroll to the specified instance of the element
        elements[instance].scrollIntoView({behavior: 'smooth'});
    }
}

function openInNewTab(url){
    var win = window.open(url, 'blank');
    win.focus();
}

function contactMe() {
    window.location.href = "mailto:nikolamilanovic40@gmail.com";
}

var buttonElement = document.getElementById("contactButton");
var linkedInButton = document.getElementById("linkedInButton");
var gitHubButton = document.getElementById("gitHubButton");
var contactMeButton = document.getElementById("contactMeButton");
var buttonElement2 = document.getElementById("contactButton2");

linkedInButton.addEventListener("click", () =>{
    openInNewTab("https://www.linkedin.com/in/milanovic-n/");
});

gitHubButton.addEventListener("click", () =>{
    openInNewTab("https://github.com/NikM2000");
});

contactMeButton.addEventListener("click", contactMe);

if (buttonElement){
    buttonElement.addEventListener("click", () => {
        scrollToElement('.header', 1);
    });
}


if (buttonElement2){
    buttonElement2.addEventListener("click", () =>{
        scrollToElement('.header');
    });
}
