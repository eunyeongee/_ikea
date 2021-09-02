$(document).ready(function () {

    //tab 메뉴 기능
    var ptabBtn = $('.tab_wrap > .tab_list');
    var ptabCont = $('.promotion_content_wrap');

    ptabBtn.click(function (e) {

        e.preventDefault();

        var target = $(this);
        var index = target.index();

        ptabBtn.children('a').removeClass('on');
        target.children('a').addClass('on');

        ptabCont.children('.promotion_content').removeClass('on');
        ptabCont.children('.promotion_content').eq(index).addClass('on');

    });



    var btnA = $("body a");

    btnA.click(function (e) {
        e.preventDefault();
    });



    var subMenu = $(".aside_sub");
    var titlMenu = $(".menu_tit");
    //var list = $(".product_item");
    //var categorymoreBtn = $("#product_more_btn");

    subMenu.hide();

    titlMenu.click(function (e) {
        e.preventDefault();

        $(this).toggleClass('active');
        $(this).next('.aside_sub').slideToggle();

    });


    $(".promotion_wrap").slick({

        infinite: true,
        dots: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000, // 한 화면에 보여질 컨텐츠 개수
        responsive: [
            {
                breakpoint: 1350, //width 1024 이상부터
                settings: {
                    infinite: true,
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                }
            }
        ] //반응형, breakpoint: 반응형 구간, settings: 반응형 구간에 따른 설정 변경
    });

    //일부 상품만 보임    
    /*list.slice(0, 9).show();

    categorymoreBtn.click(function (e) {

        e.preventDefault();

        $(".product_item:hidden").slice(0, 3).fadeIn(500);

        if ($(".product_item:hidden").length == 0) {

            $(this).css("display", "none")
        };




    });*/




});