$(document).ready(function(){

    /*-----Header------*/

    var burger = $('.burger__item');

    $('.burger').click(function(event){
       event.preventDefault();

        $('.burger__item, .header-nav, .burger, .header__inner').toggleClass('active');
        $('body').addClass('lock');

        if(burger.hasClass('active')){

        } else {
            $('body').removeClass('lock');
        }
    });


     /*-----Works------*/

    $('.nav__link--2').click(function(event){
       event.preventDefault();

        $('.header-choice, .nav__link--2').toggleClass('active');
    });


    $('.choice__li__header').click(function(event){
       event.preventDefault();

        $('.choice__li__header').not($(this)).removeClass('active');
        $('.plus__list').not($(this).next()).slideUp(300);
        $(this).toggleClass('active').next().slideToggle(300);

    });

});
