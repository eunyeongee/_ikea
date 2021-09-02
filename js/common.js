$(document).ready(function () {

    /*var btnA = $("body a");

    btnA.click(function (e) {
        e.preventDefault();
    });*/


    //슬라이드 1번
    $('#slider01').slick({
        infinite: true,
        autoplay: true,
        fade: true,
        autoplaySpeed: 2000,
        speed: 500, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)

        responsive: [
            {
                breakpoint: 1350, //width 1024 이상부터
                settings: {
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            }
        ] //반응형, breakpoint: 반응형 구간, settings: 반응형 구간에 따른 설정 변경
    });




    //슬라이드 2번
    $('#slider02').slick({
        infinite: false,
        slidesToShow: 3, // 한 화면에 보여질 컨텐츠 개수
        responsive: [
            {
                breakpoint: 1350, //width 1430 이상부터
                settings: {
                    infinite: true,
                    arrows: false,
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            }
        ] //반응형, breakpoint: 반응형 구간, settings: 반응형 구간에 따른 설정 변경
    });




    //슬라이드 3번
    $('#slider03').slick({
        infinite: false,
        slidesToShow: 3, // 한 화면에 보여질 컨텐츠 개수
        responsive: [
            {
                breakpoint: 1350, //width 1024 이상부터
                settings: {
                    infinite: true,
                    arrows: false,
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            }
        ] //반응형, breakpoint: 반응형 구간, settings: 반응형 구간에 따른 설정 변경
    });



    //tab 메뉴 기능
    var tabBtn = $('.filter_wrap > .filter_btn');
    var tabCont = $('.filter_tab_cont > .filter_tab');

    tabBtn.click(function (e) {
        e.preventDefault();

        var target = $(this);
        var index = target.index();

        tabBtn.children('a').removeClass('on');
        target.children('a').addClass('on');

        tabCont.removeClass('on');
        tabCont.eq(index).addClass('on');

    });



});