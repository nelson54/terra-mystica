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

        $.ajax({url: api+'/dig',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data)
        }).then(function(response){
                window.location.reload();
            });
    });

    $('#build').on('click', function(e){
        var data = {
            upgrade: hex
        };

        $.ajax({url: api+'/build',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data)
        }).then(function(response){

            })
    });

    $('#shovelTrack').on('click', function(e){
        $.ajax({url:api+'/shovel-track'}).then(function(){

        })
    });

    $('#shippingTrack').on('click', function(e){
        $.ajax({url: api+'/shipping-track'}).then(function(){

        });
    });

    $('#gainPower').on('click', function(e){
        $.ajax({url: api+'/gainPower'}).then(function(){

        });
    });

    $('#gainPower').on('click', function(e){
        $.ajax({url:api+'/burnPower'}).then(function(){
            window.location.reload(true);
        });
    });

    $('#endTurn').on('click', function(e){
        var data = {
            data: {actions: [{type: 'END_TURN'}]}
        };

        $.ajax({url: api+'/execute',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data)
        }).then(function(){
            window.location.reload(true);
        });
    });

    $('#pass').on('click', function(e){
        var data = {
            data: {actions: [{type: 'END_TURN'}]}
        };

        $.ajax({url: api+'/pass',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data)
        }).then(function(){
            window.location.reload(true);
        });
    });
});