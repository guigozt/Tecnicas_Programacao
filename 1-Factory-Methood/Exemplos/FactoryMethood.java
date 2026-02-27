// Classe Base  Veiculo
class Veiculo{
    private String modelo;
 
    Veiculo(String modelo){
        this.modelo = modelo;
    }
 
    public void mostrarDetalhes(){
        System.out.println("Modelo: " + modelo);
    }
}
 
class Carro extends Veiculo{
    public Carro(String modelo){
        super(modelo);
    }
}
 
class Moto extends Veiculo{
    public Moto(String modelo){
        super(modelo);
    }
}
 
class Barco extends Veiculo{
    public Barco(String modelo){
        super(modelo);
    }
}
 
abstract class FabricaDeVeiculos{
    public abstract criarVeiculo(String modelo);
}
 
class FabricaDeCarros extends FabricaDeVeiculos{
    public Veiculo criarVeiculo(String modelo){
        return new Carro(modelo);
    }
}
 
class FabricaDeMotos extends FabricaDeVeiculos{
    public Veiculo criarVeiculo(String modelo){
        return new Moto(modelo);
    }
}
 
class FabricaDeBarcos extends FabricaDeVeiculos{
    public Veiculo criarVeiculo(String modelo){
        return new Moto(modelo);
    }
}
 
public class FactoryMethood03{
    public static void main(String[] args){
        FabricaDeVeiculos fabricaCarros = new FabricaDeCarros();
        FabricaDeMotos fabricaMotos = new FabricaDeMotos();
 
        fabricaCarros.criarVeiculo('Fox');
        fabricaMotos.criarVeiculo('Honda');
 
        fabricaMotos.mostrarDetalhes();
        fabricaMotos.mostrarDetalhes();
    }
}