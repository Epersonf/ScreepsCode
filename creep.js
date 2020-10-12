const roles = {
    "worker": 5,
    "upgrader": 3,
    "builder": 3
};

var roleActions = require('./roleactions');

module.exports = {
    creepLoop() {
        for (let i in Game.creeps) {
            const creep = Game.creeps[i];
            roleActions[creep.memory.role](creep);
        }
    },
    generateCreep(spawn) {
        const body = this.createBody(spawn.energy);

        const rolesAmt = this.getRolesAmount();

        Object.keys(roles).every((key) => {
            if (rolesAmt[key] >= roles[key]) return true;
            spawn.createCreep(body, "Eperson " + Math.ceil(Math.random() * 300),  {
                role: key
            });
            return false;
        });
    },
    getRolesAmount() {
        let rolesAmt = {};
        for (let i in Game.creeps) {
            const creep = Game.creeps[i];
            if (rolesAmt[creep.memory.role] == undefined)
                rolesAmt[creep.memory.role] = 0;
            rolesAmt[creep.memory.role]++;
        }
        return rolesAmt;
    },
    createBody(energy) {
        return [MOVE, WORK, CARRY];
    }
}