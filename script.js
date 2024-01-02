
// menu mobile
function menuShow(){
    let menuMobile = document.querySelector('.cabecalho__menu__itens');
   
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open')
    }
}

// carrossel
const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 4,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },   

  });

// evento menu 

const menu = document.querySelector('.cabecalho__menu__itens');

const itensMenu = menu.querySelectorAll('.cabecalho__menu__itens__item');

itensMenu.forEach((item, index) => {
    item.addEventListener('click', () => {
        const targetId = item.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth'});
        }

    });
});


