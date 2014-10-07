$(document).ready(function(){
    $('.bxslider').bxSlider({
        mode: 'fade',
        nextSelector: '#slider-next',
        prevSelector: '#slider-prev',
        nextText: '',
        pager: false,
        auto: true,
        prevText: ''
    });

    $('.header-slider').bxSlider({
        mode: 'fade',
        nextSelector: '#header-slider-next',
        prevSelector: '#header-slider-prev',
        nextText: '',
        pager: false,
        //auto: true,
        prevText: ''
    });
});

$(document).ready(function(){
    $('.slider1').bxSlider({
        slideWidth: 940,
        minSlides: 1,
        maxSlides: 2,
        slideMargin: 10,
        auto: true,
        mode: 'fade'
    });
});