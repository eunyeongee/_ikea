$(document).ready(function () {

    var btnA = $("body a");

    btnA.click(function (e) {
        e.preventDefault();
    });

    var subMenu = $(".aside_sub");
    var titlMenu = $(".menu_tit");
    var list = $(".product_item");
    var categorymoreBtn = $("#product_more_btn");

    subMenu.hide();

    titlMenu.click(function (e) {
        e.preventDefault();

        $(this).toggleClass('active');
        $(this).next('.aside_sub').slideToggle();

    });


    //일부 상품만 보임    
    list.slice(0, 9).show();

    categorymoreBtn.click(function (e) {

        e.preventDefault();

        $(".product_item:hidden").slice(0, 3).fadeIn(500);

        if ($(".product_item:hidden").length == 0) {

            $(this).css("display", "none")
        };




    });



});