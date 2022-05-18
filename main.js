function greetings(){
    console.log('This is a simple simulation for Zelda: Breath of the Wild');
    console.log('Author: Robert Lee'+'\n');
    console.log('In this simple game, you will act as the mighty worrior Link');
    console.log('You will be teleported by Ganon to a random place and fight with evil creatures');
}

//Weapon System
let masterSword = {
    damage: 30,
    prop: 'none'
}
let flameBlade = {
    damage: 22,
    prop: 'fire'
}
let frostBlade = {
    damage: 24,
    prop: 'ice'
}

//Hero Definition
let Hero = {
    name: 'Link',
    health: 20,
    weapon: [masterSword, flameBlade, frostBlade]
}

// Location Definition:
// environment code: 0(normal),1(hot),-1(cold)
let Akkala = {
    env:0
}
let location=[]
//Game start
greetings();



