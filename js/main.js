$('.slider').slick({
    infinite: true,
    arrows : false,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1, // по 1-му слайду проскролливать
    speed: 3000, // медленная смена слайдов - скорость бегущей строки
    autoplaySpeed: 0, //делаем запуск мгновенный с загрузкой страницы
    cssEase: 'linear', // делаем анимацию однотонной при смене слайда
    
});

$('.partners_list').slick({
    infinite: true,
    arrows : false,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1, // по 1-му слайду проскролливать
    speed: 8000, // медленная смена слайдов - скорость бегущей строки
    autoplaySpeed: 0, //делаем запуск мгновенный с загрузкой страницы
    cssEase: 'linear', // делаем анимацию однотонной при смене слайда
    
});

$('.blogers_list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
});


$('.advertising_slider').slick({
    infinite: true,
    arrows : true,
    slidesToShow: 1,
    slidesToScroll: 1, // по 1-му слайду проскролливать 
    autoplaySpeed: 0, //делаем запуск мгновенный с загрузкой страницы
    cssEase: 'linear', // делаем анимацию однотонной при смене слайда
    
});