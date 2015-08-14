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

      var slideCount = $('#slider ul li').length;
      var slideWidth = $('#slider ul li').width();
      var slideHeight = $('#slider ul li').height();
      var sliderUlWidth = slideCount * slideWidth;

      $('#slider').css({ width: slideWidth, height: slideHeight });

      $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

      $('#slider ul li:last-child').prependTo('#slider ul');

      function moveLeft() {
          $('#slider ul').animate({
              left: + slideWidth
          }, 1000, function () {
              $('#slider ul li:last-child').prependTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };

      function moveRight() {
          $('#slider ul').animate({
              left: - slideWidth
          }, 1000, function () {
              $('#slider ul li:first-child').appendTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };

      $('.prev').click(function () {
          moveLeft();
      });

      $('.next').click(function () {
          moveRight();
      });
  });
})(jQuery);