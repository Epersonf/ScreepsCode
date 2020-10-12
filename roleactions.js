module.exports = {
    collect: function collect(creep, tgt=creep.pos.findClosestByPath(FIND_MY_SPAWNS), action = (target) => creep.transfer(target, RESOURCE_ENERGY)) {
        if (creep.carry.energy <= 0 || creep.carry.energy >= creep.carryCapacity)
            creep.memory.working = creep.carry.energy <= 0;
        const target = (creep.memory.working) ? creep.pos.findClosestByPath(FIND_SOURCES) : tgt;
        if (!target) return;
        if (creep.harvest(target) != OK && action(target) != OK)
            creep.moveTo(target);
    },
    worker: function worker(creep) {
        this.collect(creep);
    },
    upgrader: function upgrader(creep) {
        this.collect(creep, creep.room.controller, (target) => creep.upgradeController(target));
    },
    builder: function builder(creep) {
        
    }
}