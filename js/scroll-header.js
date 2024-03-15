window.addEventListener('load', srollLoad, false);
window.addEventListener('scroll', onScroll, false)

function scrollFooter(scrollY, heightFooter)
{
    console.log(scrollY);
    console.log(heightFooter);

    if(scrollY >= heightFooter)
    {
        document.querySelector('footer').css({
            'bottom' : '0px'
        });
    }
    else
    {
        document.querySelector('footer').css({
            'bottom' : '-' + heightFooter + 'px'
        });
    }
}

function srollLoad() {
    var windowHeight        = document.querySelector(window).height(),
        footerHeight        = document.querySelector('footer').height(),
        heightDocument      = (windowHeight) + (document.querySelector('.content').height()) + (document.querySelector('footer').height()) - 20;

    // Definindo o tamanho do elemento pra animar
    document.querySelector('#scroll-animate, #scroll-animate-main').css({
        'height' :  heightDocument + 'px'
    });

    // Definindo o tamanho dos elementos header e conteúdo
    document.querySelector('header').css({
        'height' : windowHeight + 'px',
        'line-height' : windowHeight + 'px'
    });

    document.querySelector('.wrapper-parallax').css({
        'margin-top' : windowHeight + 'px'
    });

    scrollFooter(window.scrollY, footerHeight);

    // ao dar rolagem
}

function onScroll() {
    var scroll = window.scrollY;

        document.querySelector('#scroll-animate-main').css({
            'top' : '-' + scroll + 'px'
        });

        document.querySelector('header').css({
            'background-position-y' : 50 - (scroll * 100 / heightDocument) + '%'
        });

        scrollFooter(scroll, footerHeight);
}
