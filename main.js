var title = $('#title');
var select = $('#select');
var game = $('#game');
var p1 = $('#p1');
var p2 = $('#p2');
var mode;
title.on('click', function(){
    $(this).hide();
    select.show();
});
$('#playSingle').click(function(){
    select.hide();
    game.show();
    p2.hide();
    mode = 'single';
});

$('#playMulti').click(function(){
    select.hide();
    game.show();
    mode = 'multi';
    p1.css('left', '30%');
});