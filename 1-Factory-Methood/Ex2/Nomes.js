class Nome {
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

    toString(){
        return `${this.nome} ${this.sobrenome}`
    }
}

//Classe base - criador
class AplicarNome {
    criarNome(texto){
        throw "Implemente o método criarNome"
    }

    executar(texto){
        const nome = this.criarNome(texto)
        console.log(nome.nome + " " + nome.sobrenome)
    }
}

//Formato: nome sobrenome
class FormatacaoEspaco extends AplicarNome {
    criarNome(texto) {
        const partes = texto.split(" ")
        return new Nome(partes[0], partes[1])
    }
}

//Formato: sobrenome, nome
class FormatacaoVirgula extends AplicarNome {
    criarNome(texto) {
        const partes = texto.split(", ")
        return new Nome(partes[0], partes[1])
    }
}

//Uso
const entradas = [
    "McNealy, Scott",
    "James Gosling"
]

for (let texto of entradas) {
    let app

    if (texto.includes(",")) {
        app = new FormatacaoVirgula()
    }else {
        app = new FormatacaoEspaco()
    }

    app.executar(texto)
}