const menu = document.querySelector(".topbar-button");
const menuIcone = document.querySelector(".topbar-button img");
const buttons = document.querySelector(".topbar-controls-wrapper");


menu.addEventListener("click", () => {
    buttons.classList.toggle("hidden")
    if (!buttons.classList.contains("hidden")) {
        menuIcone.src = "imgs/close.svg"
    } else {
        menuIcone.src = "imgs/menu.svg"

    }
})