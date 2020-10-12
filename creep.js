module.exports = {
    creepLoop() {
        for (let i in Game.creeps) {
            const creep = Game.creeps[i];
        }
    },
    generateCreep(spawn) {
        spawn.canCreateCreep();
    },
    createBody() {
        
    }
}