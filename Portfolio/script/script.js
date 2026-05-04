const NOME = "Luiz Fernandes";
let tituloProfissional = "Desenvolvedor de Sistemas / Faço de Tudo";
let minhaBio = "Sou um desenvolvedor em processo de aprendizado. Estou cursando atualmente o curso de Desenvolvimento de Sistemas na instituição Proz Educação";
let anoFormatura = 2026;
let mesFormatura = "12";
let diaFormatura = "31";
let anoIngresso = 2025;
let mesIngresso = "2";
let diaIngresso = "12";

let hoje = new Date();     //Issso vai criar uma função que vai procurar em uma bibliotaca a data atual.
let mesAtual = hoje.getMonth() + 1;   //Aqui ele vai pegar o mês atual, e como os meses começam do 0, a gente soma 1 para ter o número correto do mês.
let anoAtual = hoje.getFullYear();     //Aqui ele vai pegar o ano atual.
let diaAtual = hoje.getDate();        //Aqui ele vai pegar o dia atual.

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
document.getElementById("tituloProfissional").innerHTML = tituloProfissional;
document.getElementById("minhaBio").textContent = minhaBio;
document.getElementById("anoFormatura").textContent = "Ano de formatura: " + anoFormatura;
document.getElementById("Tempo restante para a formatura").textContent = "Tempo restante para a formatura: " + (anoFormatura - anoAtual) + " anos, " + (mesFormatura - mesAtual) + " meses, " + (diaFormatura - diaAtual) + " dias";


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