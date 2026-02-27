#PRODUTOS
class GatewayPagamento:
    def autorizar(self, valor):
        raise NotImplementedError('O metodo autorizar deve ser implementado')

class Recibo:
    def gerar(self, valor):
        raise NotImplementedError('O metodo gerar deve ser implementado')

#PRODUTO
class GatewayPayPal (GatewayPagamento):
    def autorizar(self, valor):
        return f'Pagamento PayPal: R$ {valor:.2f} autorizado'

class ReciboPayPal (Recibo):
    def gerar(self, valor):
        return f'Recibo PayPal: R$ {valor:.2f}'

#Fabrica abstratas
class FabricaPamento:
    def criarGateway(self):
        raise NotImplementedError('criarGatway deve ser implementado')

    def criarRecibo(self):
        raise NotImplementedError('criarRecibo deve ser implementado')

#Fabrica concreta
class FabricaPayPal (FabricaPamento):
    def criarGateway(self):
        return GatewayPayPal()

    def criarRecibo(self):
        return ReciboPayPal()

#Cliente
def finalizarCompra(fabrica, valor):
    gateway = fabrica.criarGateway()
    recibo = fabrica.criarRecibo()

    print(gateway.autorizar(valor))
    print(recibo.gerar(valor))

#Main
def main():
    finalizarCompra(FabricaPayPal(), 200.89)
    print('-' * 15)

    finalizarCompra(FabricaPayPal(), 198.50)
    print('-' * 15)

main()
