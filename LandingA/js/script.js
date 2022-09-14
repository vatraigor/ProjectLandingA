$(document).ready(function () {
//    $('.clients__slide-wrapper').slick({});
    $('.clients__slide-wrapper').slick({
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'ease',
        infinite: false,
        initialSlide: 0,
        draggable: true,
        swipe: true,
        touchThreshold: 10,


        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});