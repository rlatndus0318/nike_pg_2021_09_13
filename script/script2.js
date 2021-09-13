$(document).ready(function () {

    /*공통헤더*/
    $("#header").load("header.html");
    $("#footers").load("footer.html");

    $(".m_togglebtn").click(function () {
        $(".menu-list").toggleClass("active");
        $(".search").toggleClass("active");
    });



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

function plus() {
    var a = $("#number").val();
    a++;
    $("#number").val(a);
};

function minus() {
    var b = $("#number").val();
    b = 1;
    b--;
    $("#number").val(b);
};
