const crytop = require('crypto');

module.exports = function generateUniqueId(){
    return crytop.randomBytes(4).toString('HEX');
}