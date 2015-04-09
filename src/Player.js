var _ = require('lodash');
var gameUtils = require('./gameUtils');

var Player = function(data){
    this.id = gameUtils.makeId();
    this.passed = false;
    this.points = 20;
    _.merge(this, data);

    this.advanceShippingTrack = function(){
        this.shipping = this.shipping || {current : 0};
        this.shipping.current++;
    };

    this.advanceSpadeTrack = function(){
        this.shovel = this.shovel || {current: 0};
        this.shovel.current++;
    };

    this.leechPower = function(amount){
        this.points -= amount;
        this.gainPower(amount);
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