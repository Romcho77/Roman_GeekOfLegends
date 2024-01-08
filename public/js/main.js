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
        this.name = name
        this.combatPosition = combatPosition
        this.attack = attack
        this.hp = hp
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
        this.name = name
        this.combatPosition = combatPosition
        this.attack = attack
        this.hp = hp
        this.manaPoint = mp
        
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
        this.name = name
        this.combatPosition = combatPosition
        this.attack = attack
        this.hp = hp
        this.arrows = 6
    }


    arrowPossesion(){
        if(this.arrows < 2){
            this.combatPosition = "defense"
            this.arrows = 6
        }else{
            this.combatPosition = "attack"
            this.arrows -= 2
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
while (combatPositionWarrior != "attack" || combatPositionWarrior != "defense") {
    combatPositionWarrior = prompt("Re entrez la posture de combat... ---> soit `attack` soit `defense`")
}

let hpWarrior = +prompt("Entrez les points de vie de votre hero numero -->", i)
while(hpWarrior < 1 && hpWarrior >149){
    hpWarrior = +prompt("Re entrez le nombre de HP (Doit etre plus grand que 1 et plus petit que 149)")

}
let attackWarrior = +prompt("Entrez les points de attaque de votre hero numero -->", i)
while(attackWarrior < 0 && attackWarrior >119){
    attackWarrior = +prompt("Re entrez le nombre de HP (Doit etre plus grand ou egal que 0 et plus petit que 119)")

}

let warrior = new Guerrier(nomWarrior,combatPositionWarrior,hpWarrior,attackWarrior)

// input for Archer
let nomArcher = prompt("Entrez un nom du Archer")
let combatPositionArcher = prompt("Entrez son posture de combat")
while (combatPositionArcher != "attack" || combatPositionArcher != "defense") {
    combatPositionArcher = prompt("Re entrez la posture de combat... ---> soit `attack` soit `defense`")
}

let hpArcher = +prompt("Entrez les points de vie de Archer numero -->", i)
while(hpArcher < 1 && hpArcher >149){
    hpArcher = +prompt("Re entrez le nombre de HP (Doit etre plus grand que 1 et plus petit que 149)")

}
let attackArcher = +prompt("Entrez les points de attaque de Archer numero -->", i)
while(attackArcher < 0 && attackArcher >119){
    attackArcher = +prompt("Re entrez le nombre de HP (Doit etre plus grand ou egal que 0 et plus petit que 119)")

}


