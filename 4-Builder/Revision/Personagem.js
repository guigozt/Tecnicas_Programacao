class Personagem {
    constructor(classe, arma, habilidades) {
        this.classe = classe;
        this.arma = arma
        this.habilidades = habilidades
    }

    ficha() {
        console.log("FICHA DO PERSONAGEM")
        console.log("-------------------")
        console.log("Classe: " + this.classe)
        console.log("Arma: " + this.arma)
        console.log("Habilidades: " + this.habilidades)
    }
}

//Builder
class PersonagemBuilder {
    constructor() {
        this.classe = null
        this.arma = null
        this.habilidades = []
    }

    setClasse(newClasse) {
        this.classe = newClasse
        return this //this.classe
    }

    setArma(newArma) {
        this.arma = newArma
        return this
    }

    setHabilidades(newHabilidades) {
        this.habilidades.push(newHabilidades)
        return this
    }

    build() {
        return new Personagem(
            this.classe,
            this.arma,
            this.habilidades
        )
    }
}

//Cliente
const bruxa = new PersonagemBuilder()
    .setClasse("Bruxa")
    .setArma("Cajado")
    .setHabilidades("Criação de Esqueletos")
    .setHabilidades("Magia Negra")
    .build()

const cavaleiro = new PersonagemBuilder()
    .setClasse("Cavaleiro")
    .setArma("Espada")
    .setHabilidades("Atrair inimigos")
    .build()

const bandida = new PersonagemBuilder()
    .setClasse("Bandida Lider")
    .setArma("Porrete")
    .setHabilidades("Dash rápido")
    .build()

personagens = [bruxa, cavaleiro, bandida]

for(let personagem of personagens) {
    personagem.ficha()
    console.log()
}

