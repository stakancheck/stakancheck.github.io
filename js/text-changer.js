window.addEventListener('load', set_texts, false)
window.addEventListener('resize', set_texts, false)

function set_texts() {
    let footer_main = document.getElementById("footer-main")

    if (screen.width > 1200) {
        footer_main.textContent = "Copyright © 2023 by Artem Sukhanov | Stakancheck.space"
    } else {
        footer_main.textContent = "Copyright © 2023 by Artem Sukhanov\nStakancheck.space"
    }
}

