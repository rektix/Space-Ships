var title = $('#title');
var select = $('#select');
var game = $('#game');
var p1 = $('#p1');
var p2 = $('#p2');
var mode, interval, interval1, score1 = 0, score2 = 0;
var v1, v2, v = 2;
var x1 = 320, x2 = 458, y1 = '320px', y2 = '458px', y3;
var move1, move2, fire1, fire2;
var enemyX = [50, 110, 170, 230, 290, 350, 410, 470, 530];
var enemyY = [30, 70, 110]; 
title.on('click', function(){
    $(this).hide();
    select.show();
});
$('#playSingle').click(function (){
    select.hide();
    game.show();
    p2.hide();
    mode = 'single';
    fire1 = false;
});

$('#playMulti').click(function(){
    select.hide();
    game.show();
    $('#score2').show();
    mode = 'multi';
    p1.css('left', '192px');
    x1 = 192; y1 = '192px';
    fire1 = false; fire2 = false;
});

for (var i = 0; i < 9; i++){
    for (var j = 0; j < 3; j++){
        $('#game').append("<div class='enemy', style='left: "+enemyX[i]+"px; top: "+enemyY[j]+"px;'></div>");
    }
}

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
interval1 = setInterval(function(){
    if (mode === 'multi' || mode === 'single'){
        $(".enemy").each(function(){
            if (parseInt($(this).css('left'), 10) + v > 600){
                v = -2;
            }
            if (parseInt($(this).css('left'), 10) + v < 0){
                v = 2;
            }
        });
        //console.log(v);
        $(".enemy").each(function(){
            $(this).css('left', parseInt($(this).css('left'), 10) + v + 'px');
        })
    }
}, 30);
interval2 = setInterval(function(){
    $(".enemy").each(function(){
        if (parseInt($(this).css('left'), 10) < parseInt($(".bullet1").css('left'), 10) + parseInt($(".bullet1").css('width'), 10) &&
        parseInt($(this).css('left'), 10) + parseInt($(this).css('width'), 10) > parseInt($(".bullet1").css('left'), 10) &&
        parseInt($(this).css('top'), 10) < parseInt($(".bullet1").css('top'), 10) + parseInt($(".bullet1").css('height'), 10) &&
        parseInt($(this).css('height'), 10) + parseInt($(this).css('top'), 10) > parseInt($(".bullet1").css('top'), 10)){
            $(this).remove();
            $(".bullet1").remove();
            score1 += 100;
            $('#score1').text(score1);
        }
        if (parseInt($(this).css('left'), 10) < parseInt($(".bullet2").css('left'), 10) + parseInt($(".bullet2").css('width'), 10) &&
        parseInt($(this).css('left'), 10) + parseInt($(this).css('width'), 10) > parseInt($(".bullet2").css('left'), 10) &&
        parseInt($(this).css('top'), 10) < parseInt($(".bullet2").css('top'), 10) + parseInt($(".bullet2").css('height'), 10) &&
        parseInt($(this).css('height'), 10) + parseInt($(this).css('top'), 10) > parseInt($(".bullet2").css('top'), 10)){
            $(this).remove();
            $(".bullet2").remove();
            score2 += 100;
            $('#score2').text(score2);
        }
    })
}, 1);
$(document).bind('keydown', function(e){    
    if (e.which === 32 && fire1 === false) {
        // space    
        fire1 = true;
        $('#game').append("<div class='bullet1 bullet', style='left: "+y1+"'></div>");
        $('.bullet1')
                    .animate({top: 0}, 1500,"linear",function()
                    {
                        $(this).remove();
                    })
        setTimeout(function (){fire1 = false;}, 1500);
    }
});
$(document).bind('keydown', function(e){ 
    if (e.which === 16 && fire2 === false) {
        // shift
        fire2 = true;        
        y3 = x2 + 24 + 'px';
        $('#game').append("<div class='bullet2 bullet', style='left: "+y3+"'></div>");
        $('.bullet2')
                    .animate({top: 0}, 1500,"linear",function()
                    {
                        $(this).remove();
                    })
        setTimeout(function (){fire2 = false;}, 1500);
    }
});