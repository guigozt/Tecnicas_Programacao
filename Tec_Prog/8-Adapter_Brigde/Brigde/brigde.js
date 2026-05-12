// Implementação (Os tipos de tecnologia de teia)
const TeiaSintetica = {
    disparar: () => "🕸️ Teia grudenta de laboratório!"
};

const TeiaEletrica = {
    disparar: () => "⚡ Teia que dá choque!"
};

// Abstração (O Herói)
class HomemAranha {
    constructor(nome, tecnologiaTeia) {
        this.nome = nome;
        this.teia = tecnologiaTeia; // A "Ponte" para a implementação
    }

    atacar() {
        console.log(`${this.nome} disparou: ${this.teia.disparar()}`);
    }
}

// Você pode misturar qualquer herói com qualquer teia sem criar 50 classes
const miles = new HomemAranha("Miles Morales", TeiaEletrica);
const peter = new HomemAranha("Peter Parker", TeiaSintetica);

miles.atacar();
peter.atacar();