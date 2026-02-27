//Classe base veiculo
class Veiculo {
    constructor(modelo){
        this.modelo = modelo
    }
 
    mostrarDetalhes(){
        console.log(`Modelo: ${this.modelo}`)
    }
}
 
//Subclasse Veiculo
class Carro extends Veiculo{
    constructor(modelo){
        super(modelo);
    };
};
 
class Moto extends Veiculo{
    constructor(modelo){
        super(modelo);
    }
}
 
class Barco extends Veiculo{
    constructor(modelo){
        super(modelo)
    }
}
 
//Fabrica abstrata de veiculo
class FabricadeVeiculos{
    criarVeiculo(modelo){
        throw new Error('O método criar veiculo deve ser implementado')
    }
}
//fabrica concreta de carros
class FabricaDeCarros extends FabricadeVeiculos{
    criarVeiculo(modelo){
        return new Carro(modelo)
    }
}
 
//Fabrica concreta de motos
class FabricaDeMotos extends FabricadeVeiculos{
    criarVeiculo(modelo){
        return new Moto(modelo)
    }
}
 
//Fabrica concreta de barcos
class FabricaDeBarcos extends FabricadeVeiculos{
    criarVeiculo(modelo){
        return new Barco(modelo)
    }
}
 
//Uso de fabrica cliente
const fabricaCarros = new FabricaDeCarros();
const fabricaMotos = new FabricaDeMotos();
const fabricaBarcos = new FabricaDeBarcos();
 
const veiculo1 = fabricaCarros.criarVeiculo('Sedan')
const veiculo2 = fabricaCarros.criarVeiculo('Hatch')
const veiculo3 = fabricaMotos.criarVeiculo('Esportiva')
const veiculo4 = fabricaMotos.criarVeiculo('Custon')
const veiculo5 = fabricaBarcos.criarVeiculo('Titanic')
 
veiculo1.mostrarDetalhes()
veiculo2.mostrarDetalhes()
veiculo5.mostrarDetalhes()
 