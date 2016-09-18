$(function() {
//Varibles
  var sectionCount = $('section').length; // Int of how many sections

    for (i=0; i < sectionCount; i++) {
      $('section').eq(i).attr('data-pos', ''+ i +'');
    };

    $.fn.extend({
        animateCss: function (animationName, hidden) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            // check if element is hidden
            this.removeClass('hidden');
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
                if (hidden == true) {
                    $(this).addClass('hidden');
                }
            });
        }
    });
    // swipe event
    /* $("section").swipe( {
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        var sender = $(this);
        var pos = sender.attr('date-pos');
        var allowed_direction = sender.attr('data-directionAllowed');
        if (allowed_direction == direction) {
          if (direction == "right") {
            console.log('Right swipe allowed');
            previousSection(sender);
          } else if (direction == "left") {
            console.log('Left swipe allowed');
            nextSection(sender);
          }
        }
      },
       fingers:'all'
    }); */

    //Click events
    $('#intro .nav').click(function() {
      nextSection($('#intro'));
    });
    $('#select_drink .nav').click(function() {
      previousSection($('#select_drink'));
    });
    $('#select_score .nav').click(function() {
      previousSection($('#select_score'));
    });
    $('#select_coupon .nav').click(function() {
      previousSection($('#select_coupon'));
    });
    $('#select_demographics .back').click(function() {
      previousSection($('#select_demographics'));
    });
    $('#select_demographics .submit').click(function() {
      nextSection($('#select_demographics'));
    });
    $('#end .nav').click(function() {
      startSection($('#end'));
    });

    $('#select_drink .grid button').click(function() {
      nextSection($('#select_drink'));
    });
    $('#select_score .grid button').click(function() {
      nextSection($('#select_score'));
    });
    $('#select_coupon .grid button').click(function() {
      nextSection($('#select_coupon'));
    });
    //Move section functions

    function nextSection(current) {
        var currentpos = current.attr('data-pos');
        var nextpos = parseFloat(currentpos)+1;
        var next = $('section').eq(nextpos);
        console.log(nextpos);
        console.log(next);
        next.animateCss('slideInRight');
        $('footer .colourborder .active').removeClass('active');
        $('footer .colourborder div').eq(nextpos).addClass('active');
        current.addClass('hidden');
    };

    function previousSection(current) {
      var currentpos = current.attr('data-pos');
      var nextpos = parseFloat(currentpos)-1;
      var next = $('section').eq((nextpos));
      next.animateCss('slideInLeft');
      $('footer .colourborder .active').removeClass('active');
      $('footer .colourborder div').eq(nextpos).addClass('active');
      current.addClass('hidden');
    };

    function startSection(current) {
        $('#intro').animateCss('slideInLeft');
        $('footer .colourborder .active').removeClass('active');
        $('footer .colourborder div').eq(1).addClass('active');
        current.addClass('hidden');
    };
    // do this last so everything thing else is ready and loaded.
    console.log("JQuery Version: " + $.fn.jquery );
    $('#intro').animateCss('slideInRight');
    $('#intro').css('animation-delay', '0s');
});
