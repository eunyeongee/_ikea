$(document).ready(function () {

    var topBtn = $('.top_btn');

    
    //스크롤 이동시 top버튼 작동코드
    
    $(window).scroll(function () {

        if ($('html, body').scrollTop() == 0) {

            topBtn.fadeOut(500);
        } else {
            topBtn.fadeIn(500);
        }
    });
    
    //스크롤 이동시 top버튼 작동코드
    
    
    /*top버튼 스크롤 탑*/

    topBtn.click(function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

    });

    /*top버튼 스크롤 탑*/

    
    
    
    /*정책 tab*/
    
    //tab 메뉴 기능
    var tabBtn = $('.tabnav > .policy_tab');
    var tabCont = $('.tabcontent > .tabcon');
    
    tabCont.hide().eq(0).show();
    

    tabBtn.click(function (e) {
         e.preventDefault();

        var target = $(this);
        var index = target.index();
        

        tabBtn.removeClass('on');
        target.addClass('on');

        tabCont.hide();
        tabCont.eq(index).show();

    });

    
    //footer에서 누를때, 정책 tab
    
    var policyBtn = $('.footerpop_wrap > .f_list');//정책버튼
    var policyBox = $('.policy_box'); //정책박스
    var allMask = $('#footer_all_layer_bg'); //전체 레이어 마스크
    var policyClose = $('#policy_close'); //정책닫기버튼
    
    tabCont.hide().eq(0).show();
    

    policyBtn.click(function (e) {
        
        e.preventDefault();
        
        allMask.fadeIn(300);
        policyBox.addClass('pop');
        

        var target = $(this);
        var index = target.index();
        

        tabBtn.removeClass('on');
        tabBtn.eq(index).addClass('on');

        tabCont.hide();
        tabCont.eq(index).show();

    });
    
    policyClose.click(function (e) {
        
        e.preventDefault();

        allMask.fadeOut(300);
        policyBox.removeClass('pop');


    });
    
    /*정책 tab*/
    
    
});