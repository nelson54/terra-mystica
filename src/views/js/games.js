$(function(){
    $('#create').on('click', function(){
        jQuery.ajax('/api/game', {
            method: "POST"
        }).then(function(response){
            window.location = "/game/" + response.id;
        })
    })
});
