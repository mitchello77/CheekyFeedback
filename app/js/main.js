$(function() {
//Varibles
  var sectionCount = $('section').length; // Int of how many sections
  var isMobile = 'Desktop';

    for (i=0; i < sectionCount; i++) {
      $('section').eq(i).attr('data-pos', ''+ i +'');
    };

    // device detection
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = 'Mobile';

    // On Load form value setting
    $('#useragent').val(navigator.userAgent);
    $('#device').val(isMobile);

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
      if ($('#age').val()) {
        $('#form')[0].reset();
        nextSection($('#select_demographics'));
      }
    });
    $('#end .nav').click(function() {
      startSection($('#end'));
    });

    $('#select_drink .grid button').click(function() {
      nextSection($('#select_drink'));
      $('#drink').val($(this).attr('name'));
    });
    $('#select_score .grid button').click(function() {
      nextSection($('#select_score'));
      $('#score').val($(this).attr('name'));
    });
    $('#select_coupon .grid button').click(function() {
      nextSection($('#select_coupon'));
      $('#coupon').val($(this).attr('name'));
    });
    //Move section functions

    function nextSection(current) {
        var currentpos = current.attr('data-pos');
        var nextpos = parseFloat(currentpos)+1;
        var next = $('section').eq(nextpos);
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
