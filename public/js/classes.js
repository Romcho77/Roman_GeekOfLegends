export class Boss {
    constructor(name,attack,hp){
        this.name = name
        this.attack = attack
        this.hp = hp
    }
    attackType(hero){
        if(hero.combatPosition == "defense"){
            hero.hp -= this.attack / 2 
        }else{
            hero.hp -= this.attack
        }
    }
}


export class Hero {
    constructor(name,combatPosition,attack,hp){
        this.name = name
        this.combatPosition = combatPosition
        this.attack = attack
        this.hp = hp
    }

    
}


export class Guerrier extends Hero{
    constructor(name,combatPosition,attack,hp){
        super(name,combatPosition,attack,hp);
        this.ragePoint = 0;

    }

    rage(boss){

        if (this.ragePoint == 4 ) {
            let attackNormal = this.attack + this.attack * 0.2
            boss.hp = boss.hp - ((attackNormal + attackNormal*0.25))
            alert("Warrior attack the BOSS In rage MODE")
            this.ragePoint = 0
             

        }else if (this.combatPosition == "attack"){
            boss.hp-= this.attack + this.attack * 0.2
            alert("Warrior basic attack the BOSS")

            this.ragePoint+=1
        }else{
            this.ragePoint +=1

        }
    }

}

export class Mage extends Hero{
    constructor(name,combatPosition,attack,hp){
        super(name,combatPosition,attack,hp);
        this.manaPoint = 7
        
    }

    manaPossesion(boss){
        if (this.manaPoint > 1 && this.combatPosition == "attack") {
            
            boss.hp -= this.attack + this.attack * 0.2
            this.manaPoint = this.manaPoint - 2
            alert("Mage attack the BOSS and lose 2 mana, ----> ", this.manaPoint)
        }else if (this.manaPoint < 2){
            alert("Mage attack the BOSS")
            this.manaPoint += 7
        }
    }
}

export class Archer extends Hero{
    constructor(name,combatPosition,attack,hp){
        super(name,combatPosition,attack,hp);
        this.arrows = 6
    }


    arrowPossesion(boss){
        if(this.arrows < 2){
            alert("Archer dont attack the BOSS his arrows now 6")
            this.arrows += 6
            
        }else if (this.arrows >= 2 && this.attack == "attack"){
            alert("Archer attack the BOSS")
            boss.hp-= this.attack + this.attack * 0.2
            this.arrows -= 2

        }
    }
}