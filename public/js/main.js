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
        }
    }
}