/**
 * Get the js party started
 */

'use strict'

$(document).ready(() => {
    // JS support
    $('html').toggleClass('no-js js')

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash)
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')

            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 48
                }, 1000, 'easeInOutExpo')

                return false
            }
        }
    })

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide')
    })

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 48
    })

    // Collapse the navbar when page is scrolled
    $(window).scroll(function () {
        if ($('#mainNav').offset().top > 100) {
            $('#mainNav').addClass('navbar-shrink')
        } else {
            $('#mainNav').removeClass('navbar-shrink')
        }
    })

    // Scroll reveal calls
    window.sr = ScrollReveal()
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200)
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    })
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300)

    // Instagram feed
    var Spectra = {
        instaToken: '9700759.a732fca.e265c272ae60468d866b57716c76d167',
        instaID: 'a732fcac5ce041e087136c1053ef9459',
        init: function () {
            $.fn.spectragram.accessData = {
                accessToken: this.instaToken,
                clientID: this.instaID
            }

            $('.spectragram').spectragram('getUserFeed', {
                max: 12,
                size: 'big',
                query: 'iowgold',
                wrapEachWith: '<div class="col-sm-6 col-md-4 col-lg-3 spectragram-item"></div>'
            })
        }
    }

    Spectra.init()
})