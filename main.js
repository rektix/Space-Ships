const $title = $("#title");
const $game = $('#game');
$title.on('click', function(){
    $(this).hide();
    $game.show();
});