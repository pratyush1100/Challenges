menuButton = document.querySelector(".menu")
navBlock = document.querySelector(".nav .right")

menuButton.onclick = () => {
    navBlock.classList.toggle("active")
    if (navBlock.classList[1]) {
        menuButton.innerHTML = `<span class="material-symbols-outlined">
        close
        </span>`
    } else {
        menuButton.innerHTML = `<span class="material-symbols-outlined">
        menu
        </span>`

    }
}

