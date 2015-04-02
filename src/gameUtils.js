var uuid = require('node-uuid');

var gameUtils = {
    makeId : function(){
        return uuid.v4();
    }
};

module.exports = gameUtils;