var _ = require('lodash');
var gameUtils = require('./gameUtils');

var Player = function(data){
    this.id = gameUtils.makeId();
    this.passed = false;
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

    this.burnPower = function(amount){
        var removeFromBowl1 = amount*2;
        if(this.powerBowls[1] >= removeFromBowl1){
            this.powerBowls[1] -= removeFromBowl1;
            this.powerBowls[2] += amount;
            return true;
        }
        return false;
    };

    this.gainPower = function(amount){
        var done = false;
        var moved = 0;
        while (!done){
            done = this.movePowerFromLowestBowl() || moved === amount
        }
    };

    this.movePowerFromLowestBowl = function(){
        if(this.powerBowls[0] == 0 && this.pwoerBowls[1] == 0){
            return false;
        } else if(this.powerBowls[0] > 0){
            this.powerBowls[0]--;
            this.powerBowls[1]++;
            return true;
        } else {
            this.powerBowls[1]--;
            this.powerBowls[2]++;
            return true;
        }
    }

    this.resetPlayerForRound = function(){
        this.passed = false;
    }
};

module.exports = Player;