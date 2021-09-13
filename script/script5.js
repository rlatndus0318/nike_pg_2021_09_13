$(document).ready(function () {
    /*공통헤더*/
    $("#header").load("header.html");
    /*공통푸터*/
    $("#footers").load("footer.html");

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 90,
        nav: false,
        navText: false,
        responsive: {
            0: {
                items: 1
            },
            680: {
                items: 2
            },
            
            1024: {
                items: 3
            }
          
        },
        autoplay: true, // 오토 플레이 켜기
        autoplayTimeout: 1500, // 오토 플레이 주기
        autoplayHoverPause: true // 마우스 올리면 멈추게하기
    });

});

$(window).scroll(function () {
    var scroll = $(window).scrollTop(); // 현재 스크롤 위치값을 얻는다

    var m = matchMedia("screen and (min-width: 1024px)"); //--> 매치미디어에는 미디어와 매치스의 두개의 피터가 존재
    m.media // -> "screen and (min-width: 1024px)" 미디어쿼리 문자열 반환
    m.matche //-->  현재화면의 미디어쿼리범위에 들어가면 트루 펄스 반환

    if (matchMedia("screen and (min-width: 768px)").matches) {

        if (scroll >= 5) {
            $(".intro").stop().animate({
                left: "5%"
            }, 2000);
        }
         else {
        if (scroll >= 5) {
            $(".intro").stop().animate({
                left: "0%"
            });
        };

    }
    }


    if (scroll >= 500) {
        $(".style_img_2").stop().animate({
            right: "0%"
        }, 1000); 
    } else {
        $(".style_img_2").stop().animate({
            right: "-100%"
        }, 1000); 
    };


    if (scroll >= 2000){
        $(".style_img_3").stop().animate({
            left: "0%"
        }, 1000); 
    } else {
        $(".style_img_3").stop().animate({
            left: "-100%"
        }, 1000);
    };


});
