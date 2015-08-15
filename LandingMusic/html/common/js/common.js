(function($){
  jQuery(document).ready(function(){
    /* Marquee */
    $('.marquee').marquee({
        //speed in milliseconds of the marquee
        duration: 8000,
        //gap in pixels between the tickers
        gap: 50,
        //time in milliseconds before the marquee will start animating
        delayBeforeStart: 0,
        //'left' or 'right'
        direction: 'left',
        //true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: true
    });
    
    /* Countdown */
    $("#countdown").countdown("2015/08/16", function(event) {
          $(this).text(
                event.strftime('%D : %H : %M : %S')
          );
    });

    /* validate Top Form */
    $('#demo_box_1').change(function(){
        if(document.getElementById("demo_box_1").checked){
            $('.submit').removeAttr('disabled');
            $('.submit').css('cursor','pointer');
        }
        else{
            //$('.submit').attr('disabled','disabled');
            $('.submit').css('cursor','not-allowed');
        }
    });

    /* slider */
    setInterval(function () {
        moveRight();
    }, 6000);

    var itemWidth = $(window).width();
    $('.itemSlide').css({ width: itemWidth, height: slideHeight });
    
    var slideCount = $('#slider .slide .itemSlide').length;
    var slideWidth = $('#slider .slide .itemSlide').width();
    var slideHeight = $('#slider .slide .itemSlide').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({ width: slideWidth, height: slideHeight });

    $('#slider .slide').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider .slide .itemSlide:last-child').prependTo('#slider .slide');

    function moveLeft() {
        $('#slider .slide').animate({
            left: + slideWidth
        }, 1000, function () {
            $('#slider .slide .itemSlide:last-child').prependTo('#slider .slide');
            $('#slider .slide').css('left', '');
        });
    };

    function moveRight() {
        $('#slider .slide').animate({
            left: - slideWidth
        }, 1000, function () {
            $('#slider .slide .itemSlide:first-child').appendTo('#slider .slide');
            $('#slider .slide').css('left', '');
        });
    };

    $('.prev').click(function () {
        moveLeft();
    });

    $('.next').click(function () {
        moveRight();
    });
    
    // Basic FitVids Test
    $(".video").fitVids();
    // Custom selector and No-Double-Wrapping Prevention Test
    $(".video").fitVids({ customSelector: "iframe[src^='http://socialcam.com']"});
  });
})(jQuery);