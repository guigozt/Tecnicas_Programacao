//Interfaces
class Guerreiro {
    atacar() {
        throw new Error("Implementar atacar()")
    }
}

class Arqueiro {
    atacar() {
        throw new Error("Implementar atacar()")
    }
}

//Implementações Elfos
class GuerreiroElfo extends Guerreiro {
    atacar() {
        console.log("Guerreiro Elfo ataca com espada leve ✨")
    }
}

class ArqueiroElfo extends Arqueiro {
    atacar() {
        console.log("Arqueiro Elfo dispara flecha precisa 🏹")
    }
}

//Implementações Mortos Vivos
class GuerreiroMortoVivo extends Guerreiro {
    atacar() {
        console.log("Guerreiro Morto-Vivo ataca com força bruta 💀")
    }
}

class ArqueiroMortoVivo extends Arqueiro {
    atacar() {
        console.log("Arqueiro Morto-Vivo dispara flecha sombria ☠️")
    }
}

//Fabrica Abstrata
class FabricaTropa {
    criarGuerreiro() {
        throw new Error("Implementar criarGuerreiro()")
    }

    criarArqueiro() {
        throw new Error("Implementar criarArqueiro()")
    }
}

//Fabrica de Elfos
class FabricaElfo extends FabricaTropa {
    criarGuerreiro() {
        return new GuerreiroElfo()
    }

    criarArqueiro() {
        return new ArqueiroElfo()
    }
}

//Fabrica de Mortos Vivos
class FabricaMortoVivo extends FabricaTropa {
    criarGuerreiro() {
        return new GuerreiroMortoVivo()
    }

    criarArqueiro() {
        return new ArqueiroMortoVivo() 
    }
}

//Cliente
function startGame(fabrica) {
    const guerreiro = fabrica.criarGuerreiro()
    const arqueiro = fabrica.criarArqueiro()

    guerreiro.atacar()
    arqueiro.atacar()
}

//Main
const fabrica = new FabricaElfo()

startGame(fabrica)