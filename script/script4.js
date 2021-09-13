$(document).ready(function () {
    /*공통헤더*/
    $("#header").load("header.html");
    /*공통푸터*/
    $("#footers").load("footer.html");

    //썸네일 이미지
    var bigimg = document.querySelector("#big");
    var smallimg = document.querySelectorAll(".small");

    for (var i = 0; i < smallimg.length; i++) {
        smallimg[i].addEventListener("click", changeimg);
    }


    function changeimg() {
        var smallimgAttribute = this.getAttribute("src");
        bigimg.setAttribute("src", smallimgAttribute);
    }

    $(".n-slider li").click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        /*siblings=형제찾는요소*/
    });
});
