import * as CLASSES from "./classes.js"
import * as INSTANCES from "./instances.js"
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
console.log("$$$$$$$$$ Create Your Heroes $$$$$$$$$$$$$");
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");

// 150 hp for 3 heroes
let hpTotal = 150
// 120 attackPoints for 3 heroes
let attackPoints = 120

// Input for warrior Robuste
let nomWarrior = prompt("Entrez un nom du premier personnage")
let combatPositionWarrior = prompt("Entrez son posture de combat")
while (combatPositionWarrior != "attack" && combatPositionWarrior != "defense") {
    combatPositionWarrior = prompt("Re entrez la posture de combat... ---> soit `attack` soit `defense`")
}

let hpWarrior = +prompt("Entrez les points de vie de votre hero numero -->")
while(hpWarrior < 1 || hpWarrior >= hpTotal - 1){
    hpWarrior = +prompt("Re entrez le nombre de HP (Doit etre plus grand que 1 et plus petit que 149)")

}
hpTotal -= hpWarrior


let attackWarrior = +prompt("Entrez les points de attaque de votre hero numero -->")
while(attackWarrior < 0 && attackWarrior > attackPoints - 1){
    attackWarrior = +prompt("Re entrez le nombre de HP (Doit etre plus grand ou egal que 0 et plus petit que 119)")

}
attackPoints -= attackWarrior 


console.log("il vous reste --> "+ attackPoints+ " points de attack");

// input for Archer Robuste
let nomArcher = prompt("Entrez un nom du Archer")
let combatPositionArcher = prompt("Entrez son posture de combat")
while (combatPositionArcher != "attack" && combatPositionArcher != "defense") {
    combatPositionArcher = prompt("Re entrez la posture de combat... ---> soit `attack` soit `defense`")
}

let hpArcher = +prompt("Entrez les points de vie de Archer numero -->")
while(hpArcher < 1 && hpArcher > hpTotal ){
    hpArcher = +prompt("Re entrez le nombre de HP (Doit etre plus grand que 1 et plus petit que 149)")

}
hpTotal -=  hpArcher

let attackArcher = +prompt("Entrez les points de attaque de Archer numero -->")
while(attackArcher < 0 && attackArcher >119){
    attackArcher = +prompt("Re entrez le nombre de HP (Doit etre plus grand ou egal que 0 et plus petit que 119)")

}
attackPoints -= attackArcher





// input for Mage Robuste
let nomMage = prompt("Entrez un nom du Mage")
let combatPositionMage = prompt("Entrez son posture de combat")
while (combatPositionMage != "attack" && combatPositionMage != "defense") {
    combatPositionMage = prompt("Re entrez la posture de combat... ---> soit `attack` soit `defense`")
}

let hpMage = +prompt("Entrez les points de vie de Mage numero -->")
while(hpMage < 1 && hpMage > hpTotal ){
    hpMage = +prompt("Re entrez le nombre de HP (Doit etre plus grand que 1 et plus petit que 149)")

}
hpTotal -=  hpMage

let attackMage = +prompt("Entrez les points de attaque de Mage numero -->")
while(attackMage < 0 && attackMage >attackPoints){
    attackMage = +prompt("Re entrez le nombre de HP (Doit etre plus grand ou egal que 0 et plus petit que 119)")

}
attackPoints -= attackMage


alert(`il reste HP TOTAL ----> ${hpTotal}`)
alert(`il reste attackPointsTotal ----> ${attackPoints}`)
// si t'as mal dispercer les hp et les points d'attques  faut recommencez
while(hpTotal != 0 ){
    alert("VOUS DEVEZ bien disperser les points de vie", hpTotal);
    hpTotal = 150
    hpWarrior = +prompt("Entrez les points de vie de votre warrior -->")
    while(hpWarrior < 1 || hpWarrior >= hpTotal - 1){
        hpWarrior = +prompt("Re entrez le nombre de HP (Doit etre plus grand que 1 et plus petit que 149)")

    }
    hpTotal -= hpWarrior

    hpArcher = +prompt("Entrez les points de vie de Archer -->")
    while(hpArcher < 1 && hpArcher > hpTotal ){
        hpArcher = +prompt("Re entrez le nombre de HP (Doit etre plus grand que 1 et plus petit que 149)")

    }
    hpTotal -=  hpArcher
    let hpMage = +prompt("Entrez les points de vie de Mage  -->")
    while(hpMage < 1 && hpMage > hpTotal ){
        hpMage = +prompt("Re entrez le nombre de HP (Doit etre plus grand que 1 et plus petit que 149)")

    }
    hpTotal -=  hpMage
}


while(attackPoints != 0){
    alert("VOUS DEVEZ bien disperser les points de attack");
    attackPoints = 120
        attackWarrior = +prompt("Entrez les points de attaque de votre warrior --> ")
        while(attackWarrior < 0 && attackWarrior > attackPoints - 1){
            attackWarrior = +prompt("Re entrez le nombre de HP (Doit etre plus grand ou egal que 0 et plus petit que 119)")

        }
    attackPoints -= attackWarrior 

    attackArcher = +prompt("Entrez les points de attaque de Archer  -->")
        while(attackArcher < 0 && attackArcher >119){
            attackArcher = +prompt("Re entrez le nombre de HP (Doit etre plus grand ou egal que 0 et plus petit que 119)")
        
        }
    attackPoints -= attackArcher

    attackMage = +prompt("Entrez les points de attaque de Mage -->")
    while(attackMage < 0 && attackMage >attackPoints){
        attackMage = +prompt("Re entrez le nombre de HP (Doit etre plus grand ou egal que 0 et plus petit que 119)")

    }
    attackPoints -= attackMage

}

// instances for Heroes
let mage = new  CLASSES.Mage(nomMage,combatPositionMage,hpMage,attackMage)
let archer = new CLASSES.Archer(nomArcher,combatPositionArcher,hpArcher,attackArcher)
let warrior = new CLASSES.Guerrier(nomWarrior,combatPositionWarrior,attackWarrior,hpWarrior)
alert(`"votre guerrier ---> " ${warrior.name}  ${warrior.combatPosition}  ${warrior.attack}  ${warrior.hp} `)
alert(`votre archier --->  ${archer.name} ${archer.combatPosition} ${archer.hp} ${archer.attack}`)
alert(`votre Mage --->  ${mage.name} ${mage.combatPosition} ${mage.hp} ${mage.attack}`)


/// Loop for the game
let randomChoice = Math.floor(Math.random()* 3)
let tabBoss = [INSTANCES.fatJoe,INSTANCES.Gouvernement,INSTANCES.American]
let randomBoss = tabBoss[randomChoice]
let heroTab = [warrior,mage,archer]

while ( (warrior.hp > 0 && archer.hp > 0 && mage.hp > 0) && randomBoss.hp > 0){
    

    //!__________________ DEBUT DU COMBAT_________________ //!

    //? _______ Si heros est mort il n'attaque plus et il se fait retirer de heroTab
    if(warrior.hp <= 0 && (heroTab.includes(warrior))){
        heroTab.splice(0,1)
        warrior.attack = 0
        alert("warrior est MORRRRTTT");
        
    }else{
        //1. Le Guerrier attaque
        warrior.rage(randomBoss)
        alert("warrior attaque");
    }

    if(randomBoss.hp <=0){
        alert(randomBoss.hp,"tas gagner");
        break;
    }

    if(archer.hp <= 0 && (heroTab.includes(mage))){
        heroTab.splice(2,1)
        archer.attack = 0
    }else{
        archer.arrowPossesion(randomBoss)
    }
    if(randomBoss.hp <=0){
        console.log("Les vies de boss -->",randomBoss.hp,"tas gagner");
        break;
    }


    if(mage.hp <= 0 && (heroTab.includes(mage))){
        heroTab.splice(1,1)
        mage.attack = 0
    }else{
        mage.manaPossesion(randomBoss)
    }
    if(randomBoss.hp <=0){
        console.log(randomBoss.hp,"tas gagner");
        break;
    }
    

    //1. Le Guerrier attaque
    // warrior.rage(randomBoss)
    // //2. Le Mage attaque
    // mage.manaPossesion(randomBoss)
    // //3. Le Archer attaque
    // archer.arrowPossesion(randomBoss)

    //////////////? BOSSSSS ATTACK ///////////?
    
    switch (Math.floor(Math.random()* heroTab.length)) {
        case 0:
            randomBoss.attackType(warrior)
            alert("Warrior was attacked by the BOSS")
            break;
        case 1:
            randomBoss.attackType(mage)
            alert("Mage was attacked by the BOSS")
            break
        case 2: 
            randomBoss.attackType(archer)
            alert("Archer was attacked by the BOSS")
        default:
            alert("Nobody was attacked by the BOSS")
            break;
    }

// une variation de l'enigme
    if (randomBoss.hp <=  ((randomBoss.pv * 20)/100)) {
        let enigme = prompt(`il reste 20% de vie au Boss pour le vaincre il va faloir resoudre une enigme. c'est quoi une cagoule?`)
        let i = 3
        while(i>0){
            enigme = prompt(`mets ta reponse c'est pour faire quoi`)
            if (enigme == "voler") {
                console.log(`Vous avez reussi l'enigme le boss est mort`);
            }else {
                console.log(`Vous avez rater l'enigme le boss est toujour en vie`);
            }
            i--
            console.log("ressaye");
        }
        console.log("tas perdu");
    }

    if(randomBoss.hp <=0){
        console.log("t'as gagner");
        break;
    }else{
        alert("Nouveau Tour")
        if(warrior.hp > 0){
            combatPositionWarrior = prompt("Entrez posture de combat de warrior")
            while (combatPositionWarrior != "attack" && combatPositionWarrior != "defense") {
                combatPositionWarrior = prompt("Re entrez la posture de combat... ---> soit `attack` soit `defense`")
            }
        }
        if(mage.hp > 0 ){
            combatPositionMage = prompt("Entrez son posture de combat de mage")
            while (combatPositionMage != "attack" && combatPositionMage != "defense") {
                combatPositionMage = prompt("Re entrez la posture de combat... ---> soit `attack` soit `defense`")
            }
        }
        if(archer.hp > 0 ){
            combatPositionArcher = prompt("Entrez son posture de combat de archer")
            while (combatPositionArcher != "attack" && combatPositionArcher != "defense") {
                combatPositionArcher = prompt("Re entrez la posture de combat... ---> soit `attack` soit `defense`")
            }
        }
        alert("fin demande")
    }

}

console.log("t'as gagner felicitations !!!!!!")