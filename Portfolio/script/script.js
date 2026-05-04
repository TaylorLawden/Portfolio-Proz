const NOME = "Luiz Fernandes";
let tituloProfissional = "Desenvolvedor de Sistemas / Faço de Tudo";
let minhaBio = "Sou um desenvolvedor em processo de aprendizado. Estou cursando atualmente o curso de Desenvolvimento de Sistemas na instituição Proz Educação";
let anoFormatura = 2026;
let anoIngresso = 2025;
let indefinido;
let nulo = null;
let curso = {
    nome: "Desenvolvimento de Sistemas",
    instituicao: "Proz Educação",
    duracao: "2 anos"
}

console.log(typeof nulo);
console.log(typeof indefinido);
console.log(typeof anoFormatura);
console.log(typeof minhaBio);
console.log(typeof tituloProfissional);
console.log(typeof NOME);
console.log(typeof curso);

document.getElementById("meuNome").textContent = NOME;


const botao = document.getElementById("modoClaro/Escuro")

let claro = true;
botao.addEventListener("click", function() {
    if (claro) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        botao.textContent = "Modo Escuro";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        botao.textContent = "Modo Claro";
    }
    claro = !claro;
})

console.log(typeof nulo);