var creep = require('./creep');

module.exports = {
    spawnLoop() {
        for (let i in Game.spawns) {
            const spawn = Game.spawns[i];
            creep.generateCreep(spawn);
        }
    }
};