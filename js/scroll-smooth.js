window.addEventListener('load', initScroll, false)

function initScroll() {
    const anchors = document.querySelectorAll('a.menu-button')

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
