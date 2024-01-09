class Boss {
    constructor(name,attack,hp){
        this.name = name
        this.attack = attack
        this.hp = hp
    }
}

class Hero {
    constructor(name,combatPosition,attack,hp){
        this.name = name
        this.combatPosition = combatPosition
        this.attack = attack
        this.hp = hp
    }
    combatStatement(){
        if(this.combatPosition == "attack"){
            this.attack = this.attack + this.attack*0.2
            return 1
        }else if(this.combatPosition == "defense"){
            return 0.5
        }else{
            console.log("Je ne comprends pas dans quel posutre de combat ton heros est?");
            return 0
        }
    }
}

class Guerrier extends Hero{
    constructor(name,combatPosition,attack,hp){
        super(name,combatPosition,attack,hp);
        // this.name = name
        // this.combatPosition = combatPosition
        // this.attack = attack
        // this.hp = hp
        this.ragePoint = 0

    }

    combatStatement(){
        if (this.ragePoint == 4) {
            this.combatPosition = "attack"
            this.attack = this.attack + this.attack*0.25
            this.ragePoint = 0
            return this.attack
        }else{
            this.ragePoint +=1
            this.attack = 0
            this.combatPosition = "defense"
            return 0
        }
    }

}

class Mage extends Hero{
    constructor(name,combatPosition,attack,hp,mp){
        super(name,combatPosition,attack,hp,mp);
        // this.name = name
        // this.combatPosition = combatPosition
        // this.attack = attack
        // this.hp = hp
        // this.manaPoint = mp
        
    }

    manaPossesion(){
        if (this.manaPoint < 2) {
            this.combatPosition = "defense"
            this.manaPoint = 7
        }else{
            this.combatPosition = "attack"
            this.manaPoint -= 2
        }
    }
}

class Archer extends Hero{
    constructor(name,combatPosition,attack,hp){
        super(name,combatPosition,attack,hp);
        // this.name = name
        // this.combatPosition = combatPosition
        // this.attack = attack
        // this.hp = hp
        this.arrows = 6
    }


    arrowPossesion(){
        if(this.arrows < 2){
            this.combatPosition = "defense"
            this.arrows = 6
            return false
        }else{
            this.combatPosition = "attack"
            this.arrows -= 2
            return true
        }
    }

    attack(){

    }
}

let grosFdp = new Boss("Grolard",20,700)
let Gouvernement = new Boss("Union Europeen", 55, 300)
let American = new Boss("Uncle Sam",100,1000)

console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
console.log("$$$$$$$$$ Create Your Heroes $$$$$$$$$$$$$");
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");

// 150 hp for 3 heroes
let hpTotal = 150
// 120 attackPoints for 3 heroes
let attackPoints = 120

// for(let i = 0; i < 3; i++){

// }

// Input for warrior
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


console.log("il vous reste --> ", attackPoints, " points de attack");
let warrior = new Guerrier(nomWarrior,combatPositionWarrior,attackWarrior,hpWarrior)
alert(`"votre guerrier ---> " ${warrior.name}  ${warrior.combatPosition}  ${warrior.attack}  ${warrior.hp} `)


// input for Archer
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

let archer = new Archer(nomArcher,combatPositionArcher,hpArcher,attackArcher)

alert(`votre archier --->  ${nomArcher} ${combatPositionArcher} ${hpArcher} ${attackArcher}`)

// input for Mage
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

let mage = new Mage(nomMage,combatPositionMage,hpMage,attackMage)
alert(`HP TOTAL ----> ${hpTotal}`)
alert(`attackPoints ----> ${attackPoints}`)
alert(`votre Mage --->  ${nomMage} ${combatPositionMage} ${hpMage} ${attackMage}`)

/// Loop for the game
let randomChoice = Math.floor(Math.random()* 3)
let tabBoss = [grosFdp,Gouvernement,American]
let randomBoss = tabBoss[randomChoice]

while ( (warrior.hp <= 0 && archer.hp <= 0 && mage.hp <= 0) || randomBoss.hp <= 0){

}
