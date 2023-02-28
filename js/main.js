$(function(){

//   $(document).ready(function() {
//     $(window).scroll(function() {
//         if ($(document).scrollTop() > 100) {
//             $(".header_inner").addClass('fixed');
//         } else {
//             $(".header_inner").removeClass('fixed');
//         }
//     });
// });

$('.header_btn').on('click', function() {
    $('.header_list').toggleClass('header_list--active');
});

$('.header_btn').on('click', function() {
    $('.menu_line').toggleClass('menu_line--active');
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}



$('.slider').slick({
    infinite: true,
    arrows : false,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1, // по 1-му слайду проскролливать
    speed: 3000, // медленная смена слайдов - скорость бегущей строки
    autoplaySpeed: 0, //делаем запуск мгновенный с загрузкой страницы
    cssEase: 'linear', // делаем анимацию однотонной при смене слайда
    responsive: [
        {
          breakpoint: 1450,
          settings: {
            slidesToShow: 2,
          }
        },
        {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
      ]
    
});

$('.partners_list').slick({
    infinite: true,
    arrows : false,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1, // по 1-му слайду проскролливать
    speed: 3000, // медленная смена слайдов - скорость бегущей строки
    autoplaySpeed: 0, //делаем запуск мгновенный с загрузкой страницы
    cssEase: 'linear', // делаем анимацию однотонной при смене слайда
    
});

$('.advertising_list-photo').slick({
  infinite: true,
  arrows : false,
  slidesToShow: 2,
  autoplay: true,
  slidesToScroll: 1, // по 1-му слайду проскролливать
  speed: 4000, // медленная смена слайдов - скорость бегущей строки
  autoplaySpeed: 0, //делаем запуск мгновенный с загрузкой страницы
  cssEase: 'linear', // делаем анимацию однотонной при смене слайда
  
});

$('.blogers_list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1450,
          settings: {
            slidesToShow: 3,
          }
        }        ,
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
            },
          }
      ]
});

const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();


});