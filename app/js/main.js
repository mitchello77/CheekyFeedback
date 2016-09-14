$(function() {
//Varibles

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});


    console.log("JQuery Version: " + $.fn.jquery );
    $('#intro').animateCss('slideInLeft');

});
