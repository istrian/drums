let crashRide = document.querySelector("#crash-ride")
let hiHatTop = document .querySelector("#hihat-top")

const animateCrashOrRide = () =>{
    crashRide.style.transform = "rotate(0deg) scale(1.5)"
}

const animateHiHatClosed = () => {
    hiHatTop.style.top = "171px"
}


window.addEventListener("keydown", (event) =>{
    let kod = event.keyCode
    let key = document.querySelector(`div[data-key="${kod}"]`);

    if (!key) return

    let audio = document.querySelector(`audio[data-key="${kod}"]`)
    audio.currentTime = 0
    audio.play()

    switch (kod) {
        case 69:
        case 82:
            animateCrashOrRide();
            break;
        case 75:
            animateHiHatClosed()
            break
    }
})

const removeCrashRideTransition = e => {
    if (e.propertyName !== "transform") return
    e.target.style.transform = "rotate(-7.2deg) scale(1.5)"
}

const removeHiHatTopTransition = e => {
    if (e.propertyName !== "top") return
    e.target.classList.remove("playing")
}
crashRide.addEventListener("transitionend", removeCrashRideTransition)
hiHatTop.addEventListener("transitionend", removeHiHatTopTransition)