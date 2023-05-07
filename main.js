const yesButton = document.querySelector("[data-close-modal]")
const noButton = document.getElementById("no-btn")
const modal = document.querySelector("[data-modal]")

modal.showModal()
const smokeyElements = document.querySelectorAll("li");
const blurElements = document.querySelectorAll("body");
const fadeElements = document.querySelectorAll("dialog");

blurElements.forEach((elem) => {
    elem.classList.add('blur');
});

yesButton.addEventListener("click", () => {

    smokeyElements.forEach((elem) => {
        elem.classList.add('smoke');
    })

    blurElements.forEach((elem) => {
        elem.classList.add('unblur');
    })

    fadeElements.forEach((elem) => {
        elem.classList.add('fade');
    })

    setTimeout(function() {
        modal.close()
    }, 2000);
});

noButton.addEventListener("click", () => {

});
