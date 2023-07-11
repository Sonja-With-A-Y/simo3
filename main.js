const cookieVal = document.cookie
    .split("; ")
    .find((row) => row.startsWith("age_verified="))
    ?.split("=")[1];

let moan = new Audio('./sounds/moan.mp3');
const moanButton = document.getElementById("moan-btn")

moanButton.addEventListener("click", () => {
    moan.play();
});

if (cookieVal == "true") {
    console.log(cookieVal);
} else {

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

        document.cookie = 'age_verified=true; max-age=31536000'
    });
}
