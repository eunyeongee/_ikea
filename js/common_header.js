$(document).ready(function () {

    /*var btnA = $("body a");

    btnA.click(function (e) {
        e.preventDefault();
    });*/


    var headermenu = $('#nav > .nav_wrap > .menu'); //header 메뉴 

    var searchMask = $('#layer_bg'); //header아래 레이어 마스크


    //header 메뉴 슬라이드

    headermenu.hover(

        function () {

            $(this).children('.sub').stop().slideDown(500);
            $(this).siblings().children('.sub').stop().slideUp(500);
            searchtab.stop().animate({
                top: -375 + 'px'
            }, 500)
            searchMask.stop().fadeIn(500)


        },

        function () {

            $(this).children('.sub').stop().slideUp(500);
            searchMask.stop().fadeOut(500)

        }

    );


    /*검색창*/

    var searchBtn = $('.search_btn'); //search버튼
    var searchtab = $('.search_box'); //search박스
    var searchClose = $('#search_close'); //search닫기버튼

    var searchMask = $('#layer_bg'); //header아래 레이어 마스크

    //search박스 나타나기
    searchBtn.click(function (e) {
        e.preventDefault();
        searchtab.animate({
            top: 80 + 'px'
        }, 500)
        searchMask.stop().fadeIn(500)

    });

    //seach박스 닫기
    searchClose.click(function (e) {
        e.preventDefault();
        searchtab.animate({
            top: -335 + 'px'
        }, 500)
        searchMask.stop().fadeOut(500)
    });

    /*검색창*/



    /*로그인창*/


    //로그인 창 클릭이벤트 
    var loginBtn = $('.login_bth'); //login버튼
    var loginBox = $('.log'); //login박스
    var loginClose = $('#login_close'); //login닫기버튼

    var allMask = $('#all_layer_bg'); //전체 레이어 마스크

    loginBtn.click(function (e) {
        e.preventDefault();

        allMask.fadeIn(300);
        loginBox.addClass('pop');


    });

    loginClose.click(function (e) {
        e.preventDefault();
        
        allMask.fadeOut(300);
        loginBox.removeClass('pop');


    });



    //로그인 공백시 warning
    var id = $('#id');
    var pw = $('#pw');
    var btn = $('#login_btn');

    btn.click(function (e) {
        e.preventDefault();

        if (id.val() == "") {
            id.next('label').addClass('warning');
            setTimeout(function () {
                id.next('label').removeClass('warning')
            }, 1500);

        } else if (pw.val() == "") {
            pw.next('label').addClass('warning');
            setTimeout(function () {
                pw.next('label').removeClass('warning')
            }, 1500);
        }

    });

    /*로그인창*/
    
    /*모바일 메뉴 나타나기*/
    
    var menuBtn = $('#m_menu_btn');
    var menuBox = $('#m_nav');
    var menuClose = $('#m_menu_close_btn');
    
    menuBtn.click(function(e){
        e.preventDefault();
        
        menuBox.animate({left:0},500);
        
    });
    
    menuClose.click(function(e){
        e.preventDefault();
        
        menuBox.animate({left:'-'+100+'%'},500);
        
    });


    /*모바일 메뉴*/



    var mediumTit = $('.m_nav_wrap .menu .sub .depth2 .depth2_menu .drop');
    var mediumSub = $('.m_nav_wrap .menu .sub .depth2 .depth2_menu .depth3');


    mediumSub.hide();

    mediumTit.click(function (e) {

        e.preventDefault();

        //만약 drop_down 클래스를 가지고있다면 본인의 depth3 메뉴를 slideDown
        if ($(this).hasClass('drop_down')) {

            $(this).next('.depth3').stop().slideDown();

            //만약 drop_down 클래스를 가지고있지 않다면 depth3 메뉴를 slideUp
        } else {

            mediumTit.next('.depth3').stop().slideUp();

        }

        //클릭한 본인에게 drop_down 클래스 메뉴 추가
        $(this).addClass('drop_down');

        //클릭한 본인을 제외한 다른 .drop에 drop_down 클래스 메뉴 제거
        $(this).parent().siblings().find('.drop').removeClass('drop_down');



    });




    var menuTit = $('.m_nav_wrap .menu .drop');
    var menuSub = $('.m_nav_wrap .menu .sub');

    menuSub.hide();

    menuTit.click(function (e) {

        e.preventDefault();

        if ($(this).hasClass('drop_down')) {

            $(this).next('.sub').stop().slideDown();

            //만약 drop_down 클래스를 가지고있지 않다면 depth3 메뉴를 slideUp
        } else {

            menuTit.next('.sub').stop().slideUp();

        }

        

        //클릭한 본인에게 drop_down 클래스 메뉴 추가
        $(this).addClass('drop_down');

        //클릭한 본인을 제외한 다른 .drop에 drop_down 클래스 메뉴 제거
        $(this).parent().siblings().find('.drop').removeClass('drop_down');


    });

    /*모바일 메뉴*/




});