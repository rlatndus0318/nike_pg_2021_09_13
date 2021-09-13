$(document).ready(function () {
    AOS.init();
    /*공통헤더*/
    $("#header").load("header.html");
    /*공통푸터*/
    $("#footers").load("footer.html");
    
    $('a').click(function(e) {
  e.preventDefault();
});

   

    $(".m_togglebtn").click(function () {
        $(".menu-list").toggleClass("active");
        $(".search").toggleClass("active");
    });

    /*슬라이더*/
    $('.m-slider > .owl-carousel').owlCarousel({
        items:1,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        loop: true,
        margin: 0,
        nav: false,
        navText: false,
        // responsive: {
        //     0: {
        //         items: 1
        //     },
        //     720: {
        //         items: 1
        //     },
        //     1024: {
        //         items: 1
        //     },
        //     1440: {
        //         items: 1
        //     },
        //     2560: {
        //         items: 1
        //     }

        // }
    })

    /*styling*/
    var text = $('.marquee').text();

    for (var i = 0; i < 5; i++) {
        text += text + '';
    }

    $('.marquee').text(text);

    $('.marquee').marquee({
        duplicated: true,
        startVisible: true,
        speed: 20,
        gap: 50,
        delayBeforeStart: 0,
        direction: 'left',
        pauseOnHover: false
    });


});
