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
    constructor(name,combatPosition,attack,hp,ragePoint){
        this.name = name
        this.combatPosition = combatPosition
        this.attack = attack
        this.hp = hp
        this.ragePoint = ragePoint

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
    constructor(name,combatPosition,attack,hp,arrows){
        this.name = name
        this.combatPosition = combatPosition
        this.attack = attack
        this.hp = hp
        this.arrows = arrows
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


let nomHero = prompt("Entrez un nom du premier personnage")
let combatPositionHero = prompt("Entrez son posture de combat")
while (combatPositionHero != "attack" || combatPositionHero != "defense") {
    combatPositionHero = prompt("Re entrez la posture de combat... ---> soit `attack` soit `defense`")
}

let hpHero = +prompt("Entrez les points de vie de votre hero numero -->", i)
while(hpHero < 1 && hpHero >149){
    hpHero = +prompt("Re entrez le nombre de HP (Doit etre plus grand que 1 et plus petit que 149)")

}
let attackHero = +prompt("Entrez les points de attaque de votre hero numero -->", i)
while(attackHero < 0 && attackHero >119){
    attackHero = +prompt("Re entrez le nombre de HP (Doit etre plus grand ou egal que 0 et plus petit que 119)")

}

let warrior = new Guerrier()



