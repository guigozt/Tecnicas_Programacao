// Subsistemas complexos (A bagunça interna)
const ReatorArc = { iniciar: () => console.log("⚛️ Reator online.") };
const Propulsores = { calibrar: () => console.log("🚀 Propulsores prontos.") };
const Jarvis = { carregarIA: () => console.log("🤖 Jarvis carregado. Boa tarde, Sr. Stark.") };

// A FACADE (Interface simples)
class ArmaduraIronMan {
    ativar() {
        console.log("--- Iniciando Traje ---");
        Jarvis.carregarIA();
        ReatorArc.iniciar();
        Propulsores.calibrar();
        console.log("--- Tudo pronto para voar ---");
    }
}

// O usuário não precisa saber como o reator liga
const mark85 = new ArmaduraIronMan();
mark85.ativar();