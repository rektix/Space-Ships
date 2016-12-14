var title = $('#title');
var select = $('#select');
var game = $('#game');
var p1 = $('#p1');
var p2 = $('#p2');
var mode, interval;
var v1, v2;
var x1 = 320, x2 = 458, y1 = '320px', y2 = '458px';
var move1, move2, fire1, fire2;
title.on('click', function(){
    $(this).hide();
    select.show();
});
$('#playSingle').click(function (){
    select.hide();
    game.show();
    p2.hide();
    mode = 'single';
});

$('#playMulti').click(function(){
    select.hide();
    game.show();
    mode = 'multi';
    p1.css('left', '192px');
    x1 = 192; y1 = '192px';
});

$(document).bind('keydown', function(e){
    if (e.which === 65) {
        // a
        move1 = true;
        v1 = -3;    
    }
    if (e.which === 68) {
        // d
        move1 = true;
        v1 = 3;
    }
});
$(document).bind('keydown', function(e){
    if (e.which === 37) {
        // larr
        move2 = true;
        v2 = -3;    
    }
    if (e.which === 39) {
        // rarr
        move2 = true;
        v2 = 3;
    }
});

$(document).bind('keyup', function (e) {
    if (e.which === 65) {
        // a
        if (v1 !== 3){
            move1 = false;
            v1 = 0;
        }  
    }
    if (e.which === 68) {
        // d
        if (v1 !== -3){
            move1 = false;
            v1 = 0;
        }
    }
});
$(document).bind('keyup', function (e) {
    if (e.which === 37) {
        // larr
        if (v2 !== 3){
            move2 = false;
            v2 = 0;
        }
    }
    if (e.which === 39) {
        // rarr
        if (v2 !== -3){
            move2 = false;
            v2 = 0;
        }
    }
});
interval = setInterval(function () {
    if (move1 === true) {
        x1 += v1;
        y1 = x1 + 'px';
        p1.css('left', y1);
    }
    if (move2 === true) {
        x2 += v2;
        y2 = x2 + 'px';
        p2.css('left', y2);
    }
    if (x1 < 10){
        x1 = 10;
        y1 = x1 + 'px';
        p1.css('left', y1);
    }
    if (x1 > 630){
        x1 = 630;
        y1 = x1 + 'px';
        p1.css('left', y1);
    }
    if (x2 < -14){
        x2 = -14;
        y2 = x2 + 'px';
        p2.css('left', y2);
    }
    if (x2 > 606){
        x2 = 606;
        y2 = x2 + 'px';
        p2.css('left', y2);
    }
}, 15);
/*$(document).bind('keypress', function(e){    
    if (e.which === 32) {
        // space    
        console.log(y1);
        fire1 = true;
        $('#game').append("<div class='bullet1', style='left: "+y1+"'></div>");
    }
});
$(document).bind('keypress', function(e){ 
    if (e.which === 16) {
        // shift
        fire2 = true;
        console.log(y2);
        $('#game').append("<div class='bullet2', style='left: "+y2+"'></div>");
    }
});*/