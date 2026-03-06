class Pessoa {
    constructor(nome, cargo){
        this.nome = nome
        this.cargo = cargo
    }

    mostrar(){
        console.log("INFORMAÇÕES PESSOA")
        console.log("----------------")
        console.log("Nome:", this.nome)
        console.log("Cargo:", this.cargo)
    }
}

class Aluno extends Pessoa {
    constructor(nome, cargo){
        super(nome, cargo)
    }
}

class Administrativo extends Pessoa {
    constructor(nome, cargo){
        super(nome, cargo)
    }
}

class Professor extends Pessoa {
    constructor(nome, cargo){
        super(nome, cargo)
    }
}

class Publico extends Pessoa {
    constructor(nome, cargo){
        super(nome, cargo)
    }
}

//

class FabricaPessoas {
    criarPessoa(nome, cargo){
        throw new Error("O método criarPessoa deve ser implementado")
    }
}

class FabricaAluno extends FabricaPessoas {
    criarPessoa(nome, cargo){
        return new Aluno(nome, cargo)
    }
}

class FabricaAdministrativo extends FabricaPessoas {
    criarPessoa(nome, cargo){
        return new Administrativo(nome, cargo)
    }
}

class FabricaProfessor extends FabricaPessoas {
    criarPessoa(nome, cargo){
        return new Professor(nome, cargo)
    }
}

class FabricaPublico extends FabricaPessoas {
    criarPessoa(nome, cargo){
        return new Publico(nome, cargo)
    }
}

// Cliente
const fabricaAluno = new FabricaAluno()
const fabricaAdministrativo = new FabricaAdministrativo()
const fabricaProfessor = new FabricaProfessor()
const fabricaPublico = new FabricaPublico()

const aluno = fabricaAluno.criarPessoa("Gabriel", "Aluno")
const administrativo = fabricaAdministrativo.criarPessoa("Andrea", "Administrativo")
const professor = fabricaProfessor.criarPessoa("Vinicius", "Professor")
const publico = fabricaPublico.criarPessoa("Charles", "Publico Visitante")

pessoas = [aluno, administrativo, professor, publico]

for(let p of pessoas){
    p.mostrar()
}
