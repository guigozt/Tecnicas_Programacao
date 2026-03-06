class Pessoa{
    constructor(nome, funcao, matricula, horaEnt, horaSai){
        this.nome = nome
        this.funcao = funcao
        this.matricula = matricula
        this.horaEntrada = horaEnt
        this.horaSaida = horaSai
    }

    mostrar(){
        console.log("INFORMAÇÕES PESSOA")
        console.log("----------------")
        console.log("Nome:", this.nome)
        console.log("Função:", this.funcao)
        console.log("Matricula:", this.matricula)
        console.log("Hora Entrada:", this.horaSaida)
        console.log("Hora Saida:", this.horaSaida)
    }
}

class BuilderPessoa{
    constructor(){
        this.nome = null
        this.funcao = null
        this.matricula = null
        this.horaEntrada = null
        this.horaSaida = null
    }

    addNome(nome){
        this.nome = nome
        return this
    }

    addFuncao(funcao){
        this.funcao = funcao
        return this
    }

    addMatricula(matricula){
        this.matricula = matricula
        return this
    }

    addHoraEntrada(horaEnt){
        this.horaEntrada = horaEnt
        return this
    }

    addHoraSaida(horaSai){
        this.nome = horaSai
        return this
    }

    construir(){
        return new Pessoa(
            this.nome,
            this.funcao,
            this.matricula,
            this.horaEntrada,
            this.horaSaida
        )
    }
}

const aluno = new PessoaBuilder()
    .addNome("Gabriel")
    .addFuncao("Aluno")
    .addMatricula("A123")
    .addHoraEntrada("07:30")
    .addHoraSaida("12:00")
    .construir()

const administrativo = new PessoaBuilder()
    .addNome("Andrea")
    .addFuncao("Administrativo")
    .addMatricula("ADM456")
    .addHoraEntrada("08:00")
    .addHoraSaida("17:00")
    .construir()

const professor = new PessoaBuilder()
    .addNome("Vinicius")
    .addFuncao("Professor")
    .addMatricula("PROF789")
    .addHoraEntrada("07:00")
    .addHoraSaida("11:30")
    .construir()

const publico = new PessoaBuilder()
    .addNome("Charles")
    .addFuncao("Publico Visitante")
    .addMatricula("VIS001")
    .addHoraEntrada("09:00")
    .addHoraSaida("10:00")
    .construir()

const pessoas = [aluno, administrativo, professor, publico]

for(let p of pessoas){
    p.mostrar()
}
