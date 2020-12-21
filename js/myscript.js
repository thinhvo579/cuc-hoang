$(document).ready(function() {
    slickHeader();
    slidetoggle_header();
    fancybox();
    headerTop();


});


function slickHeader() {
    // -----------------slick----------

    $(".our-product--slide-product").slick({
        autoplay: false,

        arrows: false,

        dots: true,

        slidesToShow: 4,
        slidesToScroll: 4,

        draggable: false,

        infinite: true,

        pauseOnHover: false,

        swipe: true,

        touchMove: true,

        speed: 800,

        autoplaySpeed: 3000,

        useTransform: true,

        cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",

        adaptiveHeight: true,

        focusOnSelect: true,
        responsive: [{
                breakpoint: 990.5,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 767.5,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });
}



function slidetoggle_header() {
    jQuery(".button-mobile a").click(function() {

        jQuery(".navigation").toggleClass("active");



        jQuery("body").toggleClass("show-scroll");

    });

    jQuery(".header-nav__close").click(function() {

        jQuery(".navigation").removeClass("active");

    });

    jQuery(document).mouseup(function(e) {

        if (!jQuery(".button-mobile a, .navigation.active").is(e.target) &&

            jQuery(".button-mobile a, .navigation.active").has(e.target).length === 0

        ) {

            jQuery(".header__bar-nav").removeClass("active");

            jQuery("body").removeClass("show-scroll");

        }

    });
}

function fancybox() {
    var gallery_row = jQuery(".p__row");

    gallery_row.each(function() {
        jQuery(this)
            .find(".p__collum-photo a")

        .attr("data-fancybox", "images");

        jQuery('[data-fancybox="images"]').fancybox({
            thumbs: {
                showOnStart: true,
            },
        });
    });

    if ($(window).width() > 767.5) {
        var itemclass = "img-overlay";
        $(".p__collum-photo").append('<div class="' + itemclass + '"></div>');
    }
}

function headerTop() {
    var header = $(".header__scroll");
    if (header.length) {
        var offset = header.offset().top;
        header_height = $(".header__top").height();
        containerwidth = $(window).width();
        $(window).scroll(function() {
            if ($(window).scrollTop() > header_height) {
                header.addClass("active");
                $("#header").addClass("hide-top");
            } else {
                header.removeClass("active");
                $("#header").removeClass("hide-top");
            }
        });
    }
}