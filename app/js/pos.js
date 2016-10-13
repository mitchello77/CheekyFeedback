$(function() {

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

  $('#select_drink .grid button').click(function() {
    $('#drink').val($(this).attr('name'));
    $('#form').submit();
    $('#select_drink .wrap').animateCss('shake');
  });
});
