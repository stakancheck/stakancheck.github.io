window.addEventListener('load', initScroll, false)

function initScroll() {
    const anchors = document.querySelectorAll('a.menu-button')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href')

            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}
