/*
 * Copyright 2023. Artem Sukhanov
 *
 * This is open source software. But copying, distribution, modification, use for commercial and personal purposes is prohibited by the author of this software. All other questions can be asked by mail: stakancheck@gmail.com
 */

window.addEventListener('load', initScroll, false)

function initScroll() {
    const anchors = document.querySelectorAll('a.menu-button, a.tree-item-link')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href')
            if (blockID.startsWith("#")) {
                document.querySelector(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            } else {
                window.open(blockID, "_self")
            }


        })
    }
}
