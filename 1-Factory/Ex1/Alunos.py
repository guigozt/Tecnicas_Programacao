class Pessoa:
    def __init__(self, nome, cargo):
        self.nome = nome
        self.cargo = cargo
 
    def mostrar(self):
        print('INFORMAÇÕES PESSOA')
        print('-' * 16)
        print('Nome: ', self.nome)
        print('Nome: ', self.cargo)
 
class Aluno(Pessoa):
    def __init__(self, nome, cargo):
        super().__init__(nome, cargo)
 
class Administrativo(Pessoa):
    def __init__(self, nome, cargo):
        super().__init__(nome, cargo)
 
class Professor(Pessoa):
    def __init__(self, nome, cargo):
        super().__init__(nome, cargo)
 
class Visitante(Pessoa):
    def __init__(self, nome, cargo):
        super().__init__(nome, cargo)
 
class FabricaPessoas:
    def criarPessoa(self, nome, cargo):
        raise NotImplementedError('O metodo criarPessoa deve ser implementado')
 
class FabricaAluno:
    def criarPessoa(self, nome, cargo):
        return Aluno(aluno, cargo)
 
class FabricaAdministrativo:
    def criarPessoa(self, nome, cargo):
        return Administrativo(aluno, cargo)
 
class FabricaProfessor:
    def criarPessoa(self, modelo):
        return Professor(aluno, cargo)
 
class FabricaVisitante:
    def criarPessoa(self, nome, cargo):
        return Visitante(aluno, cargo)
 
fabricaAluno = FabricaAluno()
fabricaAdministrativo = FabricaAdministrativo()
fabricaProfessor = FabricaProfessor()
fabricaVisitante = FabricaVisitante()
 
aluno = Aluno('Gabriel', 'Aluno')
 
aluno.mostrar()
 