<!-- Initialize Swiper -->
var slider1;
var slider2;
$(function () {
    slider1 = new Swiper('.slider1', {
        pagination: {
            el: '.pag1',
            dynamicBullets: false,
            clickable:true,
        },
        autoplay: {
            delay: 3000
        },
    });
})

$(function () {
    slider2 = new Swiper('.slider2', {
        direction: 'vertical',
        pagination: {
            el: '.pag2',
            dynamicBullets: false,
            clickable:true,
        },
        autoplay: {
            delay: 3000
        },
    });
});

