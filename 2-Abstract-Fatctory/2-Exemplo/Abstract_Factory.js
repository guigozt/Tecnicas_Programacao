//PRODUTOS ABSTRATOS
class GatewayPagamento {
    autorizar(valor){
        throw new Error("O metodo autorizar deve ser implementado")
    }
}

class Recibo {
    gerar(valor){
        throw new Error("metodo gerar deve ser implementado")
    }
}

//PRODUTOS CONCRETOS - PayPal
class GatewayPayPal extends GatewayPagamento {
    autorizar(valor) {
        return `PayPal Pagamento: R$ ${valor.toFixed(2)} Autorizado!`
    }
}

class ReciboPayPal extends Recibo {
    gerar(valor){
        return `PayPal: Recibo gerado de R$ ${valor.toFixed(2)}`
    }
}

//PRODUTOS CONCRETOS - Mercado Pago
class GatewayMercadoPago extends GatewayPagamento {
    autorizar(valor) {
        return `MercadoPago Pagamento: R$ ${valor.toFixed(2)} Autorizado!`
    }
}

class ReciboMercadoPago extends Recibo {
    gerar(valor) {
        return `MercadoPago: Recibo gerado de R$ ${valor.toFixed(2)}`
    }
}

//FABRICA ABSTRATA
class FabricaPagamento {
    criarGateway() {
        throw new Error("criarGateway deve ser implementado")
    }

    criarRecibo() {
        throw new Error("criar Recibo deve ser implementado")
    }
}

//FABRICA CONCRETA
class FabricaPayPal extends FabricaPagamento {
    criarGateway() {
        return new GatewayPayPal()
    }

    criarRecibo() {
        return new ReciboPayPal()
    }
}

class FabricaMercadoPago extends FabricaPagamento {
    criarGateway() {
        return new GatewayMercadoPago()
    }

    criarRecibo() {
        return new ReciboMercadoPago()
    }
}

//CLIENTE
function finalizarCompra(fabrica, valor){
    const gateway = fabrica.criarGateway()
    const recibo = fabrica.criarRecibo()

    console.log(gateway.autorizar(valor))
    console.log(recibo.gerar(valor))
}

//Main
finalizarCompra(new FabricaPayPal(), 200.89)
console.log("-----------------------------")
finalizarCompra(new FabricaPayPal(), 198.50)

console.log("-----------------------------")
finalizarCompra(new FabricaMercadoPago(), 450.50)
console.log("-----------------------------")
finalizarCompra(new FabricaMercadoPago(), 80.00)
