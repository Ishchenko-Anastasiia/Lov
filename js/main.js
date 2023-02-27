$(function(){


$('.header_btn').on('click', function() {
    $('.header_list').toggleClass('header_list--active');
});

$('.header_btn').on('click', function() {
    $('.menu_line').toggleClass('menu_line--active');
});
// $('.services_item-link').on('click', function() {
//   $('.service_down').toggleClass('service_down--active');
// });

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

$('.advertising_list-photo').slick({
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


});