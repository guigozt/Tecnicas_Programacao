class Inimigo {
    constructor(nome, vida) {
        this.nome = nome
        this.vida = vida
    }

    clone() {
        return new Inimigo(this.nome, this.vida)
    }
}

const zumbi1 = new Inimigo("Zumbi", 100)
const zumbi2 = zumbi1.clone() //Rzumbi2 com o mesmo nome e vida de zumbi1

//Modificando clone
zumbi2.nome = "Zumbi Evoluido"
zumbi2.vida = 200

console.log(zumbi1)
console.log(zumbi2)