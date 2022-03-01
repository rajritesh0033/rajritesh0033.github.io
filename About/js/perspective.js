
$(function() {
      $('.box').mousemove(function(e) {
            var offset = $(this).offset(),
            /*try a random value here*/
            constante = 6,
            x = e.pageX - offset.left,
            y = e.pageY - offset.top,
            rx = (($(this).height()/2) - y) / ($(this).height() /2) * constante,
            ry = ( -1 * (($(this).width()/2) - x)) / ($(this).width()/2) * constante;
        
           /* $('span.box-info').text('( x, y ) : ( ' + x + ', ' + y + ' )');
            $('span.mouse-info').text('( x, y ) : ( ' + rx + ', ' + ry + ' )');*/
            
            $(this).css(
              { transform: 'rotateX(' + rx + 'deg)' +' ' + 'rotateY(' + ry + 'deg)'}
            )
      });
      $('.box').mouseleave(function(e) {
        $(this).css({ transform: 'rotateX(' + 0 + 'deg)' +' ' + 'rotateY(' + 0 + 'deg)'});
      });
});