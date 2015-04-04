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
            upgrade: hex
        };

        jQuery.ajax(api+'/build', {data: data, method: 'post'})
            .then(function(response){

            })
    });

    $('#shovelTrack').on('click', function(e){
        jQuery.post(api+'/shovel-track').then(function(){

        })
    });

    $('#shippingTrack').on('click', function(e){
        jQuery.post(api+'/shipping-track').then(function(){

        });
    });

    $('#gainPower').on('click', function(e){
        jQuery.post(api+'/gainPower').then(function(){

        });
    });

    $('#gainPower').on('click', function(e){
        jQuery.post(api+'/burnPower').then(function(){
            window.location.reload(true);
        });
    });

    $('#endTurn').on('click', function(e){
        var data = {
            contentType:'application/json; charset=utf-8',
            data: JSON.stringify({actions: [{type: 'END_TURN'}]}),
            processData: false
        };

        jQuery.post(api+'/execute', data).then(function(){
            window.location.reload(true);
        });
    });

    $('#pass').on('click', function(e){

        jQuery.post(api+'/pass', data).then(function(){
            window.location.reload(true);
        });
    });
});