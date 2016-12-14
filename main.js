const title = $('#title');
const select = $('#select');
const game = $('#game');
const p1 = $('#p1');
const p2 = $('#p2');

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
    p1.css('left', '192px');
});

$(document).bind('keydown', function(e){
    if (e.which === 65) {
        // a
         p1.css('left', '-=10');   
    }
    if (e.which === 68) {
        // d
        p1.css('left', '+=10');
    }
    if (e.which === 37) {
        // larr
        p2.css('left', '-=10');
    }
    if (e.which === 39) {
        // rarr
        p2.css('left', '+=10');
    }
     if (e.which === 32) {
        // space    
        space();
    }
     if (e.which === 16) {
        //shift
        shift()
    }
});
    function space(){
        let lf = p1.css('left'); 
        game.append("<div class='bullet1'></div>");
        const bul1 = $('.bullet1');
        bul1.css('left', lf);
        bul1.animate({top: '100px'},600,'linear',function del(){
            bul1.remove();
        });
    }
    function shift(){
        let lf = p2.css('left'); 
        game.append("<div class='bullet2'></div>");
        const bul2 = $('.bullet2');
        bul2.css('left', lf);
        bul2.animate({top: '100px'},600,'linear',function del(){
            bul2.remove();
        });
    }
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