//Game greeting
function greetings(){
    console.log('This is a simple simulation for The Legend of Zelda: Breath of the Wild');
    console.log('Author: Robert Lee');
    console.log('-----------------------------------------------------------------------------------------');
    console.log('In this simple game, you will act as the mighty worrior Link');
    console.log('You will be teleported by Ganon to a random place and fight with evil creatures');
    console.log('-----------------------------------------------------------------------------------------'+'\n');
}

//Weapon System
    // environment code: 0(normal),1(hot),-1(cold)
function weaponFactory(name,damage,prop){
    return{
        name,
        damage,
        prop
    }
}
let masterSword = weaponFactory('Master Sword',30,0);
let flameBlade = weaponFactory('Flame Blade',22,1);
let frostBlade = weaponFactory('Frost Blade',24,-1);

//Hero Definition
let hero = {
    name: 'Link',
    hp: 52,
    weapon: [masterSword, flameBlade, frostBlade]
}

function getRandomWeapon(){
    let index=Math.floor(Math.random()*hero.weapon.length);
    return hero.weapon[index];
}

// Location Definition:
    // environment code: 0(normal),1(hot),-1(cold)
function locationFactory(name,prop){
    return{
        name,
        prop
    }
}
let Akkala=locationFactory('Akkala',0);
let Gerudo=locationFactory('Gerudo',1);
let Hebra=locationFactory('Hebra',-1);
let location=[Akkala,Gerudo,Hebra];

function getRandomLocation(){
    let index=Math.floor(Math.random()*location.length);
    return location[index];
}

//Weather System
function testWeather(env,weapon){
    if(env.prop){
        if(!(env.prop+weapon.prop)){
            console.log('The weather is extreme but your weapon is helpful. So no HP will be deducted.');
            return 1;
        }
        else{
            console.log("The weather is extreme and your weapon does not help. So 2 hp will be deducted in each fighting round.");
            return 0;
        }
    }
    else{
        console.log('The weather is OK.');
        return 1;
    }
}

//Enemy System
    // environment code: 0(normal),1(hot),-1(cold)
function enemyFactory(name,prop,hp,damage){
    return{
        name,
        prop,
        hp,
        damage
    }
}
let bokoblin=enemyFactory('Bokoblin',0,72,2);
let goldBokoblin=enemyFactory('Gold Bokoblin',0,300,20);
let moblin=enemyFactory('Moblin',0,200,4);
let fireLizalfos=enemyFactory('Fire Lizalfos',1,160,10);
let iceLizalfos=enemyFactory('Ice Lizalfos',-1,160,10);
let Lynel=enemyFactory('Lynel',0,500,100);
let enemy=[bokoblin,goldBokoblin,moblin,fireLizalfos,iceLizalfos,Lynel];
function getRandomEnemy(){
    let index=Math.floor(Math.random()*enemy.length);
    return enemy[index];
}
//Game start
greetings();
let currentEnv=getRandomLocation();
let currentWeapon=getRandomWeapon();
console.log("You are now transported to "+currentEnv.name+".");
console.log('All you have is the '+currentWeapon.name+'.');
let weather=testWeather(currentEnv,currentWeapon);
let currentEnemy=getRandomEnemy();
let linkHp=hero.hp;
let enemyHp=currentEnemy.hp;
console.log('A '+currentEnemy.name+' stands in your way and there is nowhere to excape. You have to fight him.');
let count=1;
while(linkHp){
    if(!weather){
        linkHp-=2;
        if(linkHp<=0){
            console.log('Finally, you died after '+count+' rounds due to extreme weather.');
            break;
        }
    }
    if(currentEnemy.prop){
        if(!(currentWeapon.prop+currentEnemy.prop)){
            console.log('The weapon was super effective! The great '+currentEnemy.name+' has vanished!');
            break;
        }
    }
    enemyHp-=currentWeapon.damage;
    if((enemyHp<=0)){
        console.log('Finally you have defeated the famous '+currentEnemy.name+' after '+count+' rounds with left HP'+linkHp+'. Congratulations!');
        break;
    }
    linkHp-=currentEnemy.damage;
    if((linkHp<=0)){
        console.log('Finally you are defeated by '+currentEnemy.name+' after '+count+' rounds.');
        if(count==1){
            console.log('The enemy is too strong and you should find more powerful weapon!');
        }
        break;
    }
    count++;
}



