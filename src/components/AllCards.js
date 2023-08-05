export default [
    { 
        name: 'Green Panda', 
        type: 'Earth', 
        hp: 120, 
        moves: [
            { name: 'Heal', type: 'Defense', healing: 20 },
            { name: 'Rage Attack', type: 'Offense', damage: 'variable' }
        ]
    },
    { 
        name: 'Blue Bird', 
        type: 'Air', 
        hp: 80, 
        moves: [
            { name: 'Sleep Spell', type: 'Control', effect: 'Sleep' },
            { name: 'Inspire', type: 'Support', effect: 'Boost' }
        ]
    },
    { 
        name: 'Purple Snake', 
        type: 'Poison', 
        hp: 100, 
        moves: [
            { name: 'Poison Bite', type: 'Offense', damage: 30 },
            { name: 'Shed Skin', type: 'Defense', healing: 'variable' }
        ]
    }
];
