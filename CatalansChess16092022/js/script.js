$(document).ready(function () {
    $('.task__slider').slick({
        arrows: true,
        dots: true,
        centerMode: true,
        centerPadding: '0px',
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 100,
        easing: 'ease',
        infinite: false,
        initialSlide: 0,
        draggable: true,
        swipe: true,
        touchThreshold: 10,


//        responsive: [
//            {
//                breakpoint: 768,
//                settings: {
//                    arrows: false,
//                    centerMode: true,
//                    centerPadding: '40px',
//                    slidesToShow: 3
//                }
//            },
//            {
//                breakpoint: 480,
//                settings: {
//                    arrows: false,
//                    centerMode: true,
//                    centerPadding: '40px',
//                    slidesToShow: 1
//                }
//            }
//        ]
    });
});