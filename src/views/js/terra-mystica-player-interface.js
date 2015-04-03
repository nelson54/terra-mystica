$(function(){
    var $tm = $('#terra-mystica');

    var gameId = $tm.data('gameId');
    var playerId = $tm.data('playerId');

    var api = '/api/game/'+gameId+'/players/'+playerId;

    var hex = {q: 0, r: 0};

    $('#dig').on('click', function(e){
        var data = {
            dig: hex,
            spades: -1
        };

        jQuery.ajax(api+'/dig', {data: data, method: 'post'})
            .then(function(response){

            })
    });

    $('#build').on('click', function(e){
        var data = {
            upgrade: hex,
            spades: -1
        };

        jQuery.ajax(api+'/build', {data: data, method: 'post'})
            .then(function(response){

            })
    });
});