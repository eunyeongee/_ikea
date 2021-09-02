$(document).ready(function () {

    
    $('.detail_slide').slick({

        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({

        slidesToShow: 4,
        asNavFor: '.detail_slide',
        centerMode: true,
        focusOnSelect: true,
        draggable: false,

    });
    
    
    $('#review_slide').slick({

        infinite: false,
        dots:true,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1350, //width 1024 이상부터
                settings: {
                    infinite: false,
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    
                }
            }
        ] //반응형, breakpoint: 반응형 구간, settings: 반응형 구간에 따른 설정 변경

    });
    

    

    /*var btnA = $("body a");

    btnA.click(function (e) {
        e.preventDefault();
    });*/
    

});