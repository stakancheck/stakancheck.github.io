/*
 * Copyright 2023. Artem Sukhanov
 *
 * This is open source software. But copying, distribution, modification, use for commercial and personal purposes is prohibited by the author of this software. All other questions can be asked by mail: stakancheck@gmail.com
 */

window.addEventListener('load', set_texts, false)
window.addEventListener('resize', set_texts, false)

function set_texts() {
    let footer_main = document.getElementById("footer-main")

    if (screen.width > 1200) {
        footer_main.textContent = "Copyright © 2023 by Artem Sukhanov | stakancheck@github.io"
    } else {
        footer_main.textContent = "Copyright © 2023 by Artem Sukhanov\nstakancheck@github.io"
    }
}

