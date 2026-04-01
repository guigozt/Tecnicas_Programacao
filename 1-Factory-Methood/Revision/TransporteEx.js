//Produto (Interface)
class Transporte {
    entregar() {
        throw new Error("Método entregar deve ser implementado")
    }
}

//Produtos concretos
class Carro extends Transporte {
    entregar() {
        console.log("Entrega de CARRO 🚗")
    }
}

class Moto extends Transporte {
    entregar() {
        console.log("Entrega de MOTO 🛵")
    }
}

//Fabrica
class FabricaTransporte {
    criarTransporte(veiculo) {
        if (veiculo === "carro") {
            return new Carro()
        }
        else if (veiculo === "moto") {
            return new Moto()
        }
        else {
            throw new Error("Veiculo inválido...")
        }
    }
}

// Cliente
const fabrica = new FabricaTransporte()

const transporte1 = fabrica.criarTransporte("carro")
transporte1.entregar()

console.log("\n-------------------\n")

const transporte2 = fabrica.criarTransporte("moto")
transporte1.entregar()