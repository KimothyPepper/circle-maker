var $ball = $('.ball');
var $div = $('<div>');

$('<div>').on('keydown', function ()
  var newLeft = $ball.offset(). left + Math.random();
  $ball.css('left', newLeft);
});

$div.html('<div>');
$('body').append($div);
