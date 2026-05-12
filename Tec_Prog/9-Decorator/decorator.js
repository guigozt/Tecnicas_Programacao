// Objeto base
const mensagemSimples = (texto) => ({
    ler: () => texto
});

// Decorator: Efeito de Grito (CapsLock)
const comGrito = (mensagem) => ({
    ...mensagem,
    ler: () => mensagem.ler().toUpperCase() + "!!!"
});

// Decorator: Efeito de Hacker (Leetspeak)
const comHacker = (mensagem) => ({
    ...mensagem,
    ler: () => mensagem.ler().replace(/a/g, "4").replace(/e/g, "3")
});

// Uso dinâmico (composição pura!)
let msg = mensagemSimples("estou chegando");
msg = comGrito(msg);
msg = comHacker(msg);

console.log(msg.ler()); // 3STOU CH3G4NDO!!!