var CommandFacade = function(game, player){

    this.endTurn = function(){
        player.passed = true;
        game.endCurrentTurn();
    };

    this.upgradeShippingTrack = function(){
        player.upgradeShippingTrack();
    };

    this.upgradeShovelTrack = function(){
        player.upgradeShovelTrack();
    };


};

module.exports = CommandFacade;