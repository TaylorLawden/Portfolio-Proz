const NOME = "Luiz Fernandes";
let tituloProfissional = "Desenvolvedor de Sistemas / Faço de Tudo";
let minhaBio = "Sou um desenvolvedor em processo de aprendizado. Estou cursando atualmente o curso de Desenvolvimento de Sistemas na instituição Proz Educação";
let anoFormatura = 2026;
let mesFormatura = "12";
let diaFormatura = "31";
let anoIngresso = 2025;
let mesIngresso = "2";
let diaIngresso = "12";

//Serve para pegar a data atual do sistema, e a partir disso calcular o tempo restante para a formatura, ou seja, quantos anos, meses e dias faltam para a formatura.
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
//Isso é para exibir no console o tipo da varaiável, para verificar se é string, number, boolean, etc.
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

//Data de Termino do Curso
document.getElementById("anoFormatura").textContent = "Ano de formatura: " + anoFormatura;

let partes = [];

// Anos
if (anoFormatura - anoAtual === 1) {
    partes.push(`${anoFormatura - anoAtual} ano`);
} else if (anoFormatura - anoAtual > 1) {
    partes.push(`${anoFormatura - anoAtual} anos`);
}

// Meses
if (mesFormatura - mesAtual === 1) {
    partes.push(`${mesFormatura - mesAtual} mês`);
} else if (mesFormatura - mesAtual > 1) {
    partes.push(`${mesFormatura - mesAtual} meses`);
}

// Dias
if (diaFormatura - diaAtual === 1) {
    partes.push(`${diaFormatura - diaAtual} dia`);
} else if (diaFormatura - diaAtual > 1) {
    partes.push(`${diaFormatura - diaAtual} dias`);
}

// Junta tudo em uma frase
if (partes.length > 0) {
    document.getElementById("tempoRestanteParaFormatura").innerText =
        `Tempo restante para a formatura: ${partes.join(", ")}`;
} else {
    document.getElementById("tempoRestanteParaFormatura").innerText =
        `Você já se formou!`;
}

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

//Isso serve para mostrar quando da semana estamos
let diaSemana = hoje.getDay() + 1; //Aqui ele vai pegar o dia da semana atual, e como os dias começam do 0, a gente soma 1 para ter o número correto do dia da semana.

let diaEscrito;

switch (diaSemana) {
    case 1: diaEscrito = "Domingo"; break;
    case 2: diaEscrito = "Segunda-feira"; break;
    case 3: diaEscrito = "Terça-feira"; break;
    case 4: diaEscrito = "Quarta-feira"; break;
    case 5: diaEscrito = "Quinta-feira"; break;
    case 6: diaEscrito = "Sexta-feira"; break;
    case 7: diaEscrito = "Sábado"; break;
    default: diaEscrito = "Dia inválido";
}

document.write(`<p> Hoje é: ${diaEscrito} </p>`);


//=========Quiz============
// ─── QUIZ Sobre a vida / espaço ───────────────────────────────────────────
const btnVisual      = document.getElementById("btn-visual");
const btnLogica      = document.getElementById("btn-logica");
const resultadoQuiz  = document.getElementById("resultado-quiz");

btnVisual.addEventListener("click", function() {
  
  resultadoQuiz.innerHTML = `
    <strong>🎨 Você tem perfil Front-End!</strong><br>
    Você curte criar interfaces, trabalhar com cores, layouts e a experiência do usuário.
    Tecnologias pra você: HTML, CSS, React, Vue.
  `;
  resultadoQuiz.style.backgroundColor = "#e8f4fd";
  resultadoQuiz.style.padding          = "12px";
  resultadoQuiz.style.borderRadius     = "8px";
  resultadoQuiz.style.marginTop        = "10px";
});

btnLogica.addEventListener("click", function() {
  
//Pontuação das escolhas
let pontosFront  = 0;
let pontosBack   = 0;

btnVisual.addEventListener("click", function() {
  pontosFront++;
  exibirPerfil();
});

btnLogica.addEventListener("click", function() {
  pontosBack++;
  exibirPerfil();
});

//Resultado do quiz
function exibirPerfil() {  
  if (pontosFront > pontosBack) {
    resultadoQuiz.textContent = "🎨 Perfil Front-End!";
  } else if (pontosBack > pontosFront) {
    resultadoQuiz.textContent = "⚙️ Perfil Back-End!";
  } else {
    resultadoQuiz.textContent = "🔄 Perfil Full Stack — você é dos dois!";
  }
}

resultadoQuiz.innerHTML = `
    <strong>⚙️ Você tem perfil Back-End!</strong><br>
    Você curte resolver problemas complexos, trabalhar com dados e fazer a mágica acontecer nos bastidores.
    Tecnologias pra você: Node.js, Python, bancos de dados.
  `;
  resultadoQuiz.style.backgroundColor = "#e8f8f0";
  resultadoQuiz.style.padding          = "12px";
  resultadoQuiz.style.borderRadius     = "8px";
  resultadoQuiz.style.marginTop        = "10px";
});
