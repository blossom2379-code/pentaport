$(document).ready(function () {

    $('.artist_tab li').click(function () {
        var tabId = $(this).attr('data-tab');

        $('.artist_tab li').removeClass('on');
        $(this).addClass('on');

        $('.artist_list_wrap').removeClass('on').hide();
        $('#' + tabId).addClass('on').fadeIn();
    });


    $('.md_tab li').click(function () {
        var md_tab_id = $(this).attr('data-tab');

        $('.md_tab li').removeClass('on');
        $(this).addClass('on');

        $('.md_list').removeClass('on').hide();
        $("#" + md_tab_id).addClass('on').fadeIn();
    });


    var owl = $('.gallery_list');

    owl.owlCarousel({
        center: true,
        items: 1.5,
        loop: true,
        margin: -1500,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 600,
        nav: true, 
        dots: true,
        navText: ['<div class="nav_prev"></div>', '<div class="nav_next"></div>'],
        autoHeight: false,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            1000: {
                items: 3,
                margin: -400
            }
        },
        onInitialized: setCenter,
        onTranslated: setCenter
    });

    function setCenter() {
        $('.gallery_picture_box').removeClass('center');
        $('.owl-item.center').find('.gallery_picture_box').addClass('center');
    }


    $('.artist_card').mouseenter(function () {
        $(this).addClass('is-active');
    }).mouseleave(function () {
        $(this).removeClass('is-active');
    });


    $('.card_program').mouseenter(function () {
        $(this).addClass('is-active');
    }).mouseleave(function () {
        $(this).removeClass('is-active');
    });

    const slider = document.querySelector('.md_list_container');
    let isDown = false;
    let startX;
    let scrollLeft;
    let isMoved = false;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        isMoved = false;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;

        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;

        if (Math.abs(x - startX) > 5) {
            isMoved = true;
            e.preventDefault();
            slider.scrollLeft = scrollLeft - walk;
        }
    });

    slider.addEventListener('click', (e) => {
        if (isMoved) {
            e.preventDefault();
        }
    });

});

