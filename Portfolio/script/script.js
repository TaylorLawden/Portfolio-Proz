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

// ========= Data de Termino do Curso ============
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
        `Já se formou!`;
}
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//======== Isso serve para mostrar quando da semana estamos ==========
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
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// ======== Isso serve para mostrar o modo claro e escuro, e alternar entre eles quando o usuário clicar no botão ========
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
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// =========Quiz============
// ─── QUIZ Sobre a vida / espaço ───────────────────────────────────────────

const btnVisual     = document.getElementById("btn-visual");
const btnLogica     = document.getElementById("btn-logica");
const resultadoQuiz = document.getElementById("resultado-quiz");

// Elemento que mostra o texto da pergunta (você vai precisar criar esse no HTML)
const textoPergunta = document.getElementById("texto-pergunta");

let pontosFront = 0;
let pontosBack  = 0;
let indice      = 0; // Controla qual pergunta estamos

// ─── Todas as perguntas e opções ──────────────────────────────────────────
const perguntas = [
  {
    pergunta: "Como você prefere passar seu tempo livre?",
    opcaoVisual: "🎨 Explorando lugares e vivendo experiências",
    opcaoLogica: "📚 Lendo, estudando ou resolvendo problemas"
  },
  {
    pergunta: "Quando algo dá errado, você normalmente...",
    opcaoVisual: "😤 Sente tudo na hora, mas logo segue em frente",
    opcaoLogica: "🤔 Para e analisa o que aconteceu com calma"
  },
  {
    pergunta: "O que te deixa mais satisfeito?",
    opcaoVisual: "🎉 Aproveitar o momento e criar memórias",
    opcaoLogica: "🔍 Entender como as coisas funcionam de verdade"
  }
];

// ─── Função que atualiza a pergunta e os botões na tela ───────────────────
function mostrarPergunta() {
  const atual = perguntas[indice];

  textoPergunta.innerHTML    = atual.pergunta;
  btnVisual.innerHTML        = atual.opcaoVisual;
  btnLogica.innerHTML        = atual.opcaoLogica;
}

// ─── Função que calcula e exibe o resultado final ─────────────────────────
function exibirPerfil() {
  // Esconde os botões depois do quiz acabar
  btnVisual.style.display = "none";
  btnLogica.style.display = "none";

  if (pontosFront >= pontosBack) {
    resultadoQuiz.innerHTML = `
      <strong>🎨 Você tem o perfil de um experienciador</strong><br>
      Você é alguém que prefere viver a vida sem questionar demais, focando no que é imediato e tangível.
    O problema é que você acaba se limitando a um mundo de sensações e experiências, sem conseguir enxergar como o mundo funciona de verdade. Você pode até se divertir, mas não tem a menor ideia do que está acontecendo por trás das cortinas. O preço da sua felicidade é a a sua efemeridade.
    `;
    resultadoQuiz.style.backgroundColor = "#e8f8f0";
  } else {
    resultadoQuiz.innerHTML = `
      <strong>⚙️ Você tem o perfil de um observador</strong><br>
      Você gosta de analisar detalhes, observar o ambiente e perceber coisas que outros podem não notar. Você é curioso e gosta de aprender sobre o mundo ao seu redor.
    O problema é que por ser muito racional e lógico, você pode acabar entrando em uma melancolia existencial, acreditando que a sua vida e conquistas são insignificantes perante a passagem do tempo, mas não é. Você deve começar a viver a vida comemorando as suas vitorias, mas sempre com moderação, para não cair na armadilha de se tornar apenas um experienciador.
    `;
    resultadoQuiz.style.backgroundColor = "#e8f4fd";
  }

  resultadoQuiz.style.padding      = "12px";
  resultadoQuiz.style.borderRadius = "8px";
  resultadoQuiz.style.marginTop    = "10px";
}

// ─── Função chamada quando qualquer botão é clicado ───────────────────────
function proximaPergunta(tipo) {
  // Soma o ponto do perfil escolhido
  if (tipo === "visual") pontosFront++;
  if (tipo === "logica") pontosBack++;

  indice++; // Avança para a próxima pergunta

  if (indice < perguntas.length) {
    mostrarPergunta(); // Ainda tem perguntas → mostra a próxima
  } else {
    exibirPerfil();    // Acabou → mostra o resultado
  }
}

// ─── Eventos dos botões ───────────────────────────────────────────────────
btnVisual.addEventListener("click", function() {
  proximaPergunta("visual");
});

btnLogica.addEventListener("click", function() {
  proximaPergunta("logica");
});

// ─── Inicia o quiz mostrando a primeira pergunta ──────────────────────────
mostrarPergunta();

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    /*Gatilho inicial/começo*/ /*limite, limitador, roda enquanto*/ /*Incremento e decremento  
for (let i = 0; i <= 20;i++) {
  let pares = (i % 2 === 0) ? "Par" : "Ímpar";
  console.log(`${i} é ${pares}`);
}

let object = {
  nome: "Luiz",
  idade: 18,
  profissao: "Desenvolvedor de Sistemas",
}
for (let chave in object) {
  document.write(`<p>${chave}: ${object[chave]}</p>`);
}


let alunos = ["Malacy", "Isaac", "Geovana", "Anderson", "Gustavo"];
for(let contem of alunos) {
if (contem === "Anderson") {
  document.write(`<p>${contem} - Presente! </p>`);
} else {
  document.write(`<p> ${contem} - Ausente! </p>`);
  }
}


let num = prompt("Prompt 1 - Diga um número par:")
while (num % 2 !== 0) {
  num = prompt("Ops, esse número não é par! Tente novamente:");
};

do {
  num = prompt ("Prompt 2 - Diga um número par:");
} while (num % 2 !== 0);
*/
