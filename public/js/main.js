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
        if (manaPoint < 2) {
            this.combatPosition = "defense"
            this.manaPoint = 7
        }
    }


}