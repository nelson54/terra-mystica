$(function(){
    var $tm = $('#terra-mystica');

    var gameId = $tm.data('gameId');
    var playerId = $tm.data('playerId');

    var api = '/api/game/'+gameId+'/players/'+playerId;

    var hex = {q: 0, r: 0};

    $('#dig').on('click', function(e){
        var data = {
            q: hex.q,
            r: hex.r,
            distance: -1
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
            q: hex.q,
            r: hex.r
        };

        $.ajax({url: api+'/build',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data)
        }).then(function(response){
            location.reload();
            })
    });

    $('#shovelTrack').on('click', function(e){
        $.ajax({url:api+'/shovel-track', method:'post'}).then(function(){
            location.reload();
        })
    });

    $('#shippingTrack').on('click', function(e){
        $.ajax({url: api+'/shipping-track', method:'post'}).then(function(){
            location.reload();
        });
    });

    $('#gainPower').on('click', function(e){
        $.ajax({url: api+'/gainPower'}).then(function(){

        });
    });

    $('#burnPower').on('click', function(e){
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