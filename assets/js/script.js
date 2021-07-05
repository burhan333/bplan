$(function() {
    // MOBILE NAV
    $('#menu-icon').on('click', function() {
        $('.header_nav-mob').toggleClass('header_nav-mob-active')
    })

    // MOBILE NAV CHILD
    $('.header_nav-mob i').on('click', function() {
        $('.header_nav-child').toggleClass('header_nav-child-active')
    })

    // HIDE ACCORDIAN ON WINDOW LOAD
    $('.collapse').collapse()

    // OWL CAROUSEL
    $('.owl-test').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        responsive:
        {
            0:{
                items: 1,
            },

            600:{
                items: 2,
            }
        }
    })

    $('.owl-client').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        responsive:
        {
            0:{
                items: 1,
            },

            600:{
                items: 3,
            },

            992:
            {
                items: 6,
            }
        }
    })

    // INTERNATIONAL PHONE
    $("#phone").intlTelInput({
        separateDialCode:true,
        onlyCountries: ['hk','lu','sg','gb','us','ie','au','nz','ca','za','ng','de','fr','no','fi','se','dk','it','nl','pl','es','be','at','ch','pt','pk'],
    });
})