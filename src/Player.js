var _ = require('lodash');
var gameUtils = require('./gameUtils');

var Player = function(data){
    this.id = gameUtils.makeId();

    _.merge(this, data);

    this.upgradeShippingTrack = function(){
        var shipping = this.shipping;
        if(shipping.current < shipping.max){
            shipping.current++;
        }
    };

    this.upgradeShovelTrack = function(){
        var shovel = this.shovel;
        if(shovel.current < shovel.max){
            shovel.current++;
        }
    };

    this.gainPower = function(amount){

    };
};

module.exports = Player;