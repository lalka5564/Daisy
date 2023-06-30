const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$(function () {
    $('.portfolio__content .content__slider').slick({
        infinite: true,
        slidesToShow: 3,
        // centerMode: true,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 994,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 566,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
        ]
    });

    $('section.portfolio .portfolio__content .arrow.left').click(function () {
        $('.portfolio__content .content__slider').slick('slickPrev');
    });
    $('section.portfolio .portfolio__content .arrow.right').click(function () {
        $('.portfolio__content .content__slider').slick('slickNext');
    });

    $('.reviews__content .content__slider').slick({
        infinite: true,
        slidesToShow: 3,
        // centerMode: true,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 994,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 566,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
        ]
    });



    $('section.intro .slider').slick({
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToScroll: 1,
        dots: true,
        arrows: false,

    });
    $('section.reviews .reviews__content .arrow.left').click(function () {
        $('.reviews__content .content__slider').slick('slickPrev');
    });
    $('section.reviews .reviews__content .arrow.right').click(function () {
        $('.reviews__content .content__slider').slick('slickNext');
    });
    /* var interval = null;
    var slide = 0;
    $('body.index section.intro .container').each(function (index) {;
        if (index == 0) $(this).css('display', 'flex');
        else $(this).hide();
    });
    interval = setInterval(() => {;
        slide++;
        if (slide == 3) slide = 0;
        $('body.index section.intro .container').each(function (index) {;
            if (index == slide) {;
                setTimeout(() => {;
                    $(this).css('display', 'flex');
                }, 500);
            };
            else $(this).hide();
        });
    }, 4000); */

    $('header .mobile-menu').click(function () {
        $(this).toggleClass('active');
        $('header .header__navbar').toggleClass('active');
        $('html').toggleClass('no_scroll');
    });
    $('.openLead').click(function () {
        $('html').toggleClass('no_scroll');
        $('.modal_overlay').addClass('active');
        $('.modal_overlay .modal.form').addClass('active');
    })
    $('.modal .close').click(function () {
        $('html').toggleClass('no_scroll');
        $('.modal_overlay').removeClass('active');
        $('.modal_overlay .modal').removeClass('active');
    })

    $('.btn1').click(function () {
        $('.form').removeClass('active');
        $('.alert').addClass('active');
    })

    $('a.scroll').bind("click", function (e) {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
})