(function ($) {
    "use strict";

/*--
    Menu Sticky
-----------------------------------*/
$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll < 300) {
        $('.header-sticky').removeClass('is-sticky');
    }else{
        $('.header-sticky').addClass('is-sticky');
    }
});

/*--
    Mobile Menu
------------------------*/
var mainMenuNav = $('.main-menu nav');
mainMenuNav.meanmenu({
    meanScreenWidth: '991',
    meanMenuContainer: '.mobile-menu',
    meanMenuClose: '<span class="menu-close"></span>',
    meanMenuOpen: '<span class="menu-bar"></span>',
    meanRevealPosition: 'right',
    meanMenuCloseSize: '0',
});

/*--
    Hero Slider
--------------------------------------------*/
var heroSlider = $('.hero-slider');
heroSlider.slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
    responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: false,
          }
        },
        {
          breakpoint: 991,
          settings: {
            arrows: false,
          }
        }
    ]
});


/*--
    Testimonial Slider
--------------------------------------------*/
var testimonialSlider = $('.testimonial-slider')
testimonialSlider.slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScoll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
});

/*-- 
    Timeline Process
--------------------------------------------*/
var timeLine = $('.timeline');
var timeLineProces = $('.timeline-proces');
timeLine.hover(
    function() {
        var timelinePosition = $(this).position().top;
        var timelineHeight = $(this).height();
        var totalHeight = timelinePosition + timelineHeight + 50;

        $(this).addClass('hover').prevAll().addClass('hover');
        timeLineProces.css( 'height', totalHeight +'px' );
    },
    function() {
        $(this).removeClass('hover').prevAll().removeClass('hover');
        timeLineProces.css( 'height', '0px' );
    }
);

/*--
    Isotop with ImagesLoaded
-----------------------------------*/
var isotopFilter = $('.isotop-filter');
var isotopGrid = $('.isotop-grid');
var isotopGridItem = '.isotop-item';

isotopFilter.find('button:first-child').addClass('active');

/*-- Images Loaded --*/
isotopGrid.imagesLoaded(function () {

    isotopGrid.isotope({
        itemSelector: isotopGridItem,
        layoutMode: 'masonry',
    });

    /*-- Isotop Filter Menu --*/
    isotopFilter.on('click', 'button', function () {

        var filterValue = $(this).attr('data-filter');

        isotopFilter.find('button').removeClass('active');
        $(this).addClass('active');
        isotopGrid.isotope({filter: filterValue});

    });

});

/*--
    Video Popup
-----------------------------------*/
var videoPopup = $('.video-popup');
videoPopup.magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});

/*--
    Image Popup
-----------------------------------*/
var imagePopup = $('.image-popup');
imagePopup.magnificPopup({
    type: 'image',
    mainClass: 'mfp-fade',
});

/*--
    Image Popup
-----------------------------------*/
var galleryPopup = $('.gallery-popup');
galleryPopup.magnificPopup({
    type: 'image',
    mainClass: 'mfp-fade',
    gallery: {
        enabled: true,
    },
});

/*--
    Counter UP
-----------------------------------*/
var counter = $('.counter')
counter.counterUp({
    delay: 20,
    time: 3000
});

/*--
    MailChimp
-----------------------------------*/
$('#mc-form').ajaxChimp({
    language: 'en',
    callback: mailChimpResponse,
    // ADD YOUR MAILCHIMP URL BELOW HERE!
    url: 'https://gmail.us3.list-manage.com/subscribe/post?u=0ea82695c67fa6d4d14b79dbe&id=abd416a564'

});
function mailChimpResponse(resp) {

    if (resp.result === 'success') {
        $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
        $('.mailchimp-error').fadeOut(400);

    } else if(resp.result === 'error') {
        $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
    }  
}

/*--
    Instagram Feed
-----------------------------------*/
if(true) {
    var feed = new Instafeed({
        get: 'user',
        userId: 1328305635,
        accessToken: '1328305635.a6df367.d9fc2308f87246f4a6b1cab25bb48f63',
        target: 'instagram-feed',
        resolution: 'thumbnail',
        limit: 8,
        template: '<li><a href="{{link}}" target="_new"><img src="{{image}}" /> <span class="like"><i class="fa fa-heart-o"></i>{{likes}}</span></a></li>',
    });
    feed.run();
}

/*--
    Scroll Up
-----------------------------------*/
$.scrollUp({
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade',
    scrollText: '<i class="fa fa-angle-up"></i>',
});

})(jQuery); 
