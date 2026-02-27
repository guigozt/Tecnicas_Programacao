//Produtos abstratos
class ProdutoEletronico{
    detalhes(){
        throw new Error("detalhes deve ser implementada")
    }
}

class ProdutoModa{
    detalhes(){
        throw new Error("detalhes deve ser implementada")
    }
}


class TelefoneTech extends ProdutoEletronico {
    detalhes(){
        return "Telefone Tech"
    }
}

class CamisaTech extends ProdutoModa {
    detalhes(){
        return "Camisa Tech"
    }
}

class TelefoneFashion extends ProdutoEletronico {
    detalhes(){
        return "Telefone Fashion"
    }
}

class CamisaFashion extends ProdutoModa {
    detalhes(){
        return "Camisa Fashion"
    }
}

//Fabrica abstrata
class FabricaProduto {
    criarEletronico(){
        throw new Error('criarEletronico deve ser implementada')
    }

    criarModa(){
        throw new Error('criarModa deve ser implementada')
    }
}

//Fabrica concreta
class FabricaTech extends FabricaProduto {
    criarEletronico(){
        return new TelefoneTech()
    }

    criarModa(){
        return new CamisaTech()
    }
}

class FabricaFashion extends FabricaProduto {
    criarEletronico(){
        return new TelefoneFashion()
    }

    criarModa(){
        return new CamisaFashion()
    }
}

//Cliente
function montarCatalogo(fabrica) {
    const eletronico = fabrica.criarEletronico()
    const moda = fabrica.criarModa()

    console.log(eletronico.detalhes())
    console.log(moda.detalhes())
}

//Uso
const fabrica = new FabricaTech()

montarCatalogo(fabrica)