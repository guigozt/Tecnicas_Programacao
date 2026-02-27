#base veiculo
class Veiculo:
    def __init__(self, modelo):
        self.modelo = modelo
 
    def mostrarDetalhes(self):
        print(f'Modelo: {modelo}')
 
#sublasse veiculo
class Carro(Veiculo):
    def __init__(self, modelo):
        super().__init__(modelo)
 
 
class Moto(Veiculo):
    def __init__(self, modelo):
        super().__init__(modelo)
 
class Barco(Veiculo):
    def __init__(self, modelo):
        super().__init__(modelo)
 
#fabrica abs veiculo
class FabricaDeVeiculo:
    def criarVeiculo(self, modelo):
        raise NotImplementedError('O metodo criarVeiculo deve ser implementado')
 
 
#fabrica conc carros
class FabricaDeCarros:
    def criarVeiculo(self, modelo):
        return Carro(modelo)
 
#fabrica conc motos
class FabricaDeMotos:
    def criarVeiculo(self, modelo):
        return Moto(modelo)
 
#fabrica conc barcos
class FabricaDeBarcos:
    def criarVeiculo(self, modelo):
        return Barco(modelo)
 
#uso fabrica cliente
 
fabricaCarros = FabricaDeCarros()
fabricaMotos = FabricaDeMotos()
fabricaDeBarcos = FabricaDeBarcos()
 
veiculo1 = fabricaCarros.criarVeiculo('Carro')
 
veiculo1.mostrarDetalhes()
 
 