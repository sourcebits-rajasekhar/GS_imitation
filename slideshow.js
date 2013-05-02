alert('came here')
$(function() {
    var moveDuration = 500;
    $("#nextlink").click(function() {
        var large_image= $(".large");
        alert('came here')
        large_image.animate({left:30px},fast);
    });
});