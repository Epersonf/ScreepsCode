var spawn = require('./spawn');
var creep = require('./creep');

module.exports.loop = function () {
    spawn.spawnLoop();
    creep.creepLoop();
}