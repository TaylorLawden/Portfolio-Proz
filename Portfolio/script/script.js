// ─── Data atual ───────────────────────────────────────────────────────────
const hoje     = new Date();     // Pega a data atual
const anoAtual = hoje.getFullYear();     // Extrai o ano atual
const mesAtual = hoje.getMonth() + 1;     // Extrai o mês atual (começa do 0, por isso soma 1)
const diaAtual = hoje.getDate();     // Extrai o dia atual



// ─── Função que CRIA o objeto com os dados pessoais ──────────────────────
function criarPerfil(nome, tituloProfissional, bio, anoFormatura, mesFormatura, diaFormatura, anoIngresso, mesIngresso, diaIngresso) {     // Recebe todos os dados pessoais como parâmetros
  return {     // Devolve um objeto com todos os dados organizados
    nome:               nome,     // Nome completo
    tituloProfissional: tituloProfissional,     // Título profissional
    bio:                bio,     // Biografia
    anoFormatura:       anoFormatura,     // Ano de formatura
    mesFormatura:       mesFormatura,     // Mês de formatura
    diaFormatura:       diaFormatura,     // Dia de formatura
    anoIngresso:        anoIngresso,     // Ano de ingresso no curso
    mesIngresso:        mesIngresso,     // Mês de ingresso no curso
    diaIngresso:        diaIngresso      // Dia de ingresso no curso
  };
}

// ─── Função que exibe os dados do perfil na página ───────────────────────
function exibirInformacoesPessoais(nome, titulo, bio) {     // Recebe o nome, título e bio como parâmetros
  document.getElementById("meuNome").textContent          = nome;     // Injeta o nome no elemento HTML correspondente
  document.getElementById("tituloProfissional").innerHTML = titulo;     // Injeta o título no elemento HTML correspondente
  document.getElementById("minhaBio").textContent         = bio;     // Injeta a bio no elemento HTML correspondente
}

// ─── Cria o perfil chamando a função com os valores ──────────────────────
const perfil = criarPerfil(     // Chama a função passando todos os dados e guarda o objeto retornado
  "Luiz Fernandes",     // Nome
  "Desenvolvedor de Sistemas / Faço de Tudo",     // Título profissional
  "Sou um desenvolvedor em processo de aprendizado. Estou cursando atualmente o curso de Desenvolvimento de Sistemas na instituição Proz Educação",     // Bio
  2026, "12", "31",     // Ano, mês e dia de formatura
  2025, "2",  "12"      // Ano, mês e dia de ingresso
);
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// ========= Data de Termino do Curso ============

// ─── Função que CRIA a parte do tempo (ano, mês ou dia) ──────────────────
function criarParte(diferenca, singular, plural) {     // Recebe a diferença (de valor), o nome no singular (Exemplo: 1 ano) e no plural (Exemplo: 2 anos)
  if (diferenca === 1) return `${diferenca} ${singular}`;     // Se a diferença for 1, usa o singular (ex: "1 ano")
  if (diferenca > 1)  return `${diferenca} ${plural}`;     // Se for maior que 1, usa o plural (ex: "2 anos")
  return null;     // Se for 0 ou negativo, não tem nada a mostrar
}

// ─── Função que CRIA a frase completa do tempo restante ──────────────────
function criarTempoRestante(anoFormatura, mesFormatura, diaFormatura, anoAtual, mesAtual, diaAtual) {     // Recebe as datas de formatura e atual como parâmetros
  const partes = [];     // Array que vai guardar cada parte do tempo restante

  const parteAnos  = criarParte(anoFormatura - anoAtual, "ano", "anos");     // Cria a parte dos anos
  const parteMeses = criarParte(mesFormatura - mesAtual, "mês", "meses");     // Cria a parte dos meses
  const parteDias  = criarParte(diaFormatura - diaAtual, "dia", "dias");     // Cria a parte dos dias

  if (parteAnos)  partes.push(parteAnos);     // Se tiver anos restantes, adiciona ao array
  if (parteMeses) partes.push(parteMeses);     // Se tiver meses restantes, adiciona ao array
  if (parteDias)  partes.push(parteDias);     // Se tiver dias restantes, adiciona ao array

  if (partes.length > 0) {     // Se ainda houver tempo restante...
    return `Tempo restante para a formatura: ${partes.join(", ")}`;     // ...junta tudo em uma frase
  } else {     // Se não houver mais tempo restante...
    return `Já se formou!`;     // ...retorna a mensagem de formatura
  }
}

// ─── Função que exibe tudo na página ─────────────────────────────────────
function exibirFormatura() {     // Chamada para mostrar as informações de formatura na página
  document.getElementById("anoFormatura").textContent =
    "Ano de formatura: " + perfil.anoFormatura;     // ✅ Corrigido — agora usa perfil.anoFormatura

  const frase = criarTempoRestante(     // Chama a função que calcula e monta a frase do tempo restante
    perfil.anoFormatura, perfil.mesFormatura, perfil.diaFormatura,     // ✅ Corrigido — agora usa os dados do objeto perfil
    anoAtual, mesAtual, diaAtual     // Passa as datas atuais
  );

  document.getElementById("tempoRestanteParaFormatura").innerText = frase;     // Injeta a frase na página
}
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// ─── Função que CRIA o relatório dos tipos das variáveis ─────────────────
function criarRelatorioTipos(variaveis) {     // Recebe um objeto com o nome e o valor de cada variável
  for (let chave in variaveis) {     // Percorre cada item do objeto recebido
    console.log(`${chave}: ${typeof variaveis[chave]}`);     // Exibe no console o nome e o tipo de cada variável
  }
}
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//======== Isso serve para mostrar quando da semana estamos ==========

// ─── Função que CRIA o nome do dia baseado no número ─────────────────────
function criarDiaSemana(diaSemana) {     // Recebe o número do dia da semana como parâmetro
  switch (diaSemana) {     // Verifica qual número foi recebido e retorna o nome correspondente
    case 1: return "Domingo";     // Se for 1, devolve "Domingo"
    case 2: return "Segunda-feira";     // Se for 2, devolve "Segunda-feira"
    case 3: return "Terça-feira";     // Se for 3, devolve "Terça-feira"
    case 4: return "Quarta-feira";     // Se for 4, devolve "Quarta-feira"
    case 5: return "Quinta-feira";     // Se for 5, devolve "Quinta-feira"
    case 6: return "Sexta-feira";     // Se for 6, devolve "Sexta-feira"
    case 7: return "Sábado";     // Se for 7, devolve "Sábado"
    default: return "Dia inválido";     // Se não for nenhum dos casos, devolve "Dia inválido"
  }
}

// ─── Função que exibe o dia da semana na página ───────────────────────────
function exibirDiaSemana() {     // Chamada para mostrar o dia atual na página
  const diaSemana  = hoje.getDay() + 1;     // Pega o dia atual (começa do 0, por isso soma 1)
  const diaEscrito = criarDiaSemana(diaSemana);     // Chama a função que converte o número no nome do dia

  document.getElementById("diaSemana").innerHTML = `<p>Hoje é: ${diaEscrito}</p>`;     // Injeta o dia na página
}
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// ======== Modo claro e escuro ========

const botao = document.getElementById("modoClaro/Escuro");     // Pega o botão no HTML pelo seu ID

let claro = true;     // Variável que controla qual modo está ativo no momento (começa no modo claro)

// ─── Função que CRIA o objeto com as configurações de cada modo ───────────
function criarModo(corFundo, corTexto, textoBotao) {     // Recebe as 3 configurações do modo como parâmetros
  return {     // Devolve um objeto com os dados organizados
    corFundo:   corFundo,     // Cor de fundo da página
    corTexto:   corTexto,     // Cor do texto da página
    textoBotao: textoBotao    // Texto que o botão vai exibir
  };
}

// ─── Função que aplica o modo na página ───────────────────────────────────
function aplicarModo() {     // Chamada sempre que o botão for clicado
  const modo = claro     // ✅ Corrigido — agora declara modo com const para evitar variável global
    ? criarModo("black", "white", "Modo Claro")     // Modo escuro: fundo preto, texto branco, botão diz "Modo Claro"
    : criarModo("white", "black", "Modo Escuro");     // Modo claro: fundo branco, texto preto, botão diz "Modo Escuro"

  document.body.style.backgroundColor = modo.corFundo;     // Aplica a cor de fundo na página
  document.body.style.color           = modo.corTexto;     // Aplica a cor do texto na página
  botao.textContent                   = modo.textoBotao;     // Atualiza o texto do botão

  claro = !claro;     // Inverte o estado: se era true vira false, se era false vira true
}
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// =========Quiz============
// ─── QUIZ Sobre a vida / espaço ───────────────────────────────────────────

const btnVisual     = document.getElementById("escolhaExperencial");     // Pega o botão "Visual" no HTML pelo seu ID
const btnLogica     = document.getElementById("escolhaLogica");          // Pega o botão "Lógica" no HTML pelo seu ID
const resultadoQuiz = document.getElementById("resultado-quiz");     // Pega o elemento que vai exibir o resultado final
const textoPergunta = document.getElementById("texto-pergunta");     // Pega o elemento que vai exibir o texto da pergunta atual

let pontosFront = 0;     // Contador de pontos do perfil "Experienciador"
let pontosBack  = 0;     // Contador de pontos do perfil "Observador"
let indice      = 0;     // Controla qual pergunta está sendo exibida no momento

// ─── Função que CRIA cada objeto de pergunta ──────────────────────────────
function criarPergunta(pergunta, opcaoVisual, opcaoLogica) {     // Recebe os 3 dados de cada pergunta como parâmetros
  return {     // Devolve um objeto com os dados organizados
    pergunta:    pergunta,     // Texto da pergunta
    opcaoVisual: opcaoVisual,     // Texto do botão Visual
    opcaoLogica: opcaoLogica      // Texto do botão Lógica
  };
}

// ─── Todas as perguntas criadas pela função ───────────────────────────────
const perguntas = [     // Array que guarda todos os objetos de pergunta
  criarPergunta(
    "Como você enxerga a vida?",
    "🎨 Como algo que eu tenho que aproveitar ao máximo enquanto posso, sem me preocupar muito.",
    "📚 Como algo que eu tenho que entender profundamente, mesmo que isso me cause sofrimento por entender demais."
  ),
  criarPergunta(
    "Quando algo dá errado, você normalmente...",
    "😤 Sente tudo na hora, mas logo segue em frente. É melhor viver o momento do que se preocupar com algo que já aconteceu.",
    "🤔 Para e analisa o que aconteceu com calma. Sempre tem uma forma de resolver as coisas."
  ),
  criarPergunta(
    "O que mais te interessa?",
    "🎉 Aproveitar o momento e criar memórias.",
    "🔍 Entender como as coisas funcionam de verdade."
  )
];

// ─── Função que atualiza a pergunta e os botões na tela ───────────────────
function mostrarPergunta() {     // Chamada sempre que precisar exibir a pergunta atual
  const atual = perguntas[indice];     // Pega o objeto da pergunta na posição do índice atual

  textoPergunta.innerHTML = atual.pergunta;     // Coloca o texto da pergunta no elemento HTML
  btnVisual.innerHTML     = atual.opcaoVisual;     // Atualiza o texto do botão Visual
  btnLogica.innerHTML     = atual.opcaoLogica;     // Atualiza o texto do botão Lógica
}

// ─── Função que monta o HTML do resultado ─────────────────────────────────
function criarResultado(tipo) {     // Recebe "experienciador" ou "observador" e devolve o HTML do resultado
  if (tipo === "experienciador") {     // Se o perfil for experienciador, monta esse bloco
    return {
      html: `
        <strong>🎨 Você tem o perfil de um experienciador</strong><br>
        Você é alguém que prefere viver a vida sem questionar demais, focando no que é imediato e tangível.
        O problema é que você acaba se limitando a um mundo de sensações e experiências, sem conseguir enxergar como o mundo funciona de verdade.
        O preço da sua felicidade é a sua efemeridade.
      `,
      cor: "#e8f8f0"     // Cor de fundo verde para o perfil experienciador
    };
  } else {     // Se não, monta o bloco do perfil observador
    return {
      html: `
        <strong>⚙️ Você tem o perfil de um observador</strong><br>
        Você gosta de analisar detalhes, observar o ambiente e perceber coisas que outros podem não notar.
        O problema é que por ser muito racional, você pode acabar entrando em uma melancolia existencial.
        Comemore suas vitórias, mas sempre com moderação.
      `,
      cor: "#e8f4fd"     // Cor de fundo azul para o perfil observador
    };
  }
}

// ─── Função que calcula e exibe o resultado final ─────────────────────────
function exibirPerfil() {     // ✅ Corrigido — não recebe mais parâmetro, pois é do quiz
  btnVisual.style.display = "none";     // Esconde o botão Visual pois o quiz acabou
  btnLogica.style.display = "none";     // Esconde o botão Lógica pois o quiz acabou

  const tipo      = pontosFront >= pontosBack ? "experienciador" : "observador";     // Define o perfil comparando os pontos
  const resultado = criarResultado(tipo);     // Chama a função que monta o HTML do resultado

  resultadoQuiz.innerHTML             = resultado.html;     // Injeta o HTML do resultado na página
  resultadoQuiz.style.backgroundColor = resultado.cor;     // Aplica a cor de fundo do perfil
  resultadoQuiz.style.padding         = "12px";     // Adiciona espaçamento interno ao bloco de resultado
  resultadoQuiz.style.borderRadius    = "8px";     // Arredonda as bordas do bloco de resultado
  resultadoQuiz.style.marginTop       = "10px";     // Adiciona espaço acima do bloco de resultado
}

// ─── Função chamada quando qualquer botão é clicado ───────────────────────
function proximaPergunta(tipo) {     // Recebe "visual" ou "logica" dependendo do botão clicado
  if (tipo === "visual") pontosFront++;     // Se clicou no Visual, soma 1 ponto no perfil Experienciador
  if (tipo === "logica") pontosBack++;     // Se clicou no Lógica, soma 1 ponto no perfil Observador

  indice++;     // Avança o índice para a próxima pergunta

  if (indice < perguntas.length) {     // Se ainda houver perguntas...
    mostrarPergunta();     // ...exibe a próxima pergunta
  } else {     // Se não houver mais perguntas...
    exibirPerfil();     // ...calcula e exibe o resultado final
  }
}

// ─── Eventos dos botões ───────────────────────────────────────────────────
btnVisual.addEventListener("click", function() {     // Quando o botão Visual for clicado...
  proximaPergunta("visual");     // ...chama a função passando "visual" como tipo
});

btnLogica.addEventListener("click", function() {     // Quando o botão Lógica for clicado...
  proximaPergunta("logica");     // ...chama a função passando "logica" como tipo
});
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//========= Minhas habilidades =============
function criarHabilidades(habilidades) {     // Função que recebe o array de habilidades como parâmetro
  let lista = "<ul>";     // Abre a tag ul que vai envolver todos os itens da lista

  for (let i = 0; i < habilidades.length; i++) {     // Loop que percorre cada item do array, de 0 até o último
    lista += "<li>" + habilidades[i] + "</li>";     // A cada volta, pega a habilidade da posição i e envolve em <li>
  }

  lista += "</ul>";     // Fecha a tag ul depois que todas as habilidades foram adicionadas
  return lista;     // Devolve a lista completa em HTML para quem chamou a função
}

function exibirHabilidades() {     // Função responsável por pegar o HTML gerado e colocar na página
  const minhasHabilidades = ["HTML", "CSS", "JavaScript", "Python", "Design", "Engenharia de Prompts", "Criatividade"];     // Array com todas as habilidades

  const listaHTML = criarHabilidades(minhasHabilidades);     // Chama a função de criação passando o array, e guarda o HTML retornado

  document.getElementById("minhasHabilidades").innerHTML = listaHTML;     // Injeta o HTML gerado dentro do elemento com id "minhasHabilidades"
}
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// ========= Meus Projetos Código =============

// ─── Função que CRIA o objeto projeto com os valores que você passar ──────
function criarProjeto(nome, tecnologias, conhecimentos, descricao, oQueTenhoQueAturar) {     // Recebe todos os dados do projeto como parâmetros
  return {     // Devolve um objeto com os dados organizados
    nome:               nome,     // Nome do projeto
    tecnologias:        tecnologias,     // Array com as tecnologias usadas
    conhecimentos:      conhecimentos,     // Ferramentas e conhecimentos aplicados
    descricao:          descricao,     // Descrição do projeto
    oQueTenhoQueAturar: oQueTenhoQueAturar     // Array com os desafios enfrentados
  };
}

// ─── Cria cada projeto chamando a função com os valores ───────────────────
let projetos = [     // Array que guarda todos os projetos criados
  criarProjeto(
    "Aplicação de Estacionamento",
    ["Python", "Tkinter", "Sqlite", "Paint"],
    "VsCode, GitHub, pip, PyInstaller...",
    "Aplicação desktop para gerenciamento de estacionamento, com funcionalidades de cadastro de veículos, controle de vagas e horas de entrada e saída.",
    ["Minha falta de conhecimento", "Preguiça do Rafael"]
  ),
  criarProjeto(
    "Aplicação de Caixa de Hamburgueria",
    ["Python", "Tkinter", "Sqlite", "Paint"],
    "VsCode, GitHub, pip, PyInstaller...",
    "Aplicação desktop para gerenciamento de caixa de hamburgueria, com cadastro de pedidos e histórico de vendas.",
    ["Minha falta de conhecimento", "Os pedidos de Responsividade", "Organização do Front-End"]
  )
];

// ─── Função que gera o HTML de um projeto ────────────────────────────────
function criarCardProjeto(projeto) {     // Recebe um objeto projeto e devolve o HTML dele
  return `
    <div class="projeto">
      <h2>${projeto.nome}</h2>
      <p><strong>Descrição:</strong> ${projeto.descricao}</p>
      <p><strong>Tecnologias:</strong> ${projeto.tecnologias.join(", ")}</p>
      <p><strong>Conhecimentos usados:</strong> ${projeto.conhecimentos}</p>
      <p><strong>O que tive que aguentar:</strong></p>
      <ul>
        ${projeto.oQueTenhoQueAturar.map(item => `<li>${item}</li>`).join("")}
      </ul>
    </div>
  `;
}

// ─── Função que exibe todos os projetos no site ───────────────────────────
function exibirProjetos() {     // Percorre o array e injeta o HTML de cada projeto no container
  const container = document.getElementById("listaProjetos");     // Pega o container no HTML

  for (let i = 0; i < projetos.length; i++) {     // Percorre todos os projetos do array
    container.innerHTML += criarCardProjeto(projetos[i]);     // Gera e injeta o HTML de cada projeto
  }
}
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// ========= Contato por E-mail =============

// ─── Função que VALIDA se o e-mail tem o formato correto ─────────────────
function validarEmail(email) {     // Recebe o e-mail digitado e verifica se é válido
  const formato = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;     // Expressão regular que verifica o formato nome@dominio.extensao
  return formato.test(email);     // Retorna true se for válido, false se não for
}

// ─── Função que ABRE o e-mail automaticamente ────────────────────────────
function abrirEmail(emailUsuario) {     // Recebe o e-mail do usuário para colocar no campo "reply-to"
  const destinatario = "luizfernandesdn1@gmail.com";     // E-mail do portfólio
  const assunto      = encodeURIComponent("Avaliação do Portifólio - Site");     // Assunto já preenchido (encodeURIComponent evita erros com espaços e acentos)
  const corpo        = encodeURIComponent(`Olá Luiz! Eu vim avaliar o seu portfólio!\n\n<b>Minha avaliação:`);     // Corpo inicial do e-mail. O usuário pode completar depois (encodeURIComponent para evitar erros)

  window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;     // Abre o aplicativo de e-mail do usuário com tudo preenchido
}

// ─── Função que VALIDA e dispara o envio do e-mail ───────────────────────
function enviarAvaliacaoEmail() {     // Chamada quando o usuário clica no botão
  const input    = document.getElementById("inputEmail");     // Pega o campo de e-mail
  const mensagem = document.getElementById("mensagemEmail");  // Pega o elemento de mensagem
  const email    = input.value.trim();                        // Pega o valor digitado e remove espaços extras

  if (email === "") {     // Se o campo estiver vazio...
    mensagem.textContent            = "⚠️ Por favor, digite seu e-mail antes de enviar.";     // Mensagem de campo vazio
    mensagem.style.backgroundColor  = "#fff3cd";
    mensagem.style.color            = "#856404";
    return;     // Para a função aqui
  }

  if (!validarEmail(email)) {     // Se o e-mail não tiver o formato correto...
    mensagem.textContent            = "❌ E-mail inválido! Verifique se digitou corretamente (ex: nome@email.com).";     // Mensagem de e-mail inválido
    mensagem.style.backgroundColor  = "#fde8e8";
    mensagem.style.color            = "#842029";
    return;     // Para a função aqui
  }

  mensagem.textContent            = "✅ E-mail válido! Abrindo seu aplicativo de e-mail...";     // Mensagem de sucesso
  mensagem.style.backgroundColor  = "#e8f8f0";
  mensagem.style.color            = "#155724";

  abrirEmail(email);     // Chama a função que abre o aplicativo de e-mail com tudo preenchido
}
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//================================ Funções =============================================

// Exibe o relatório de tipos usando os dados do objeto perfil
criarRelatorioTipos({
  nome:               perfil.nome,     // Tipo do nome
  tituloProfissional: perfil.tituloProfissional,     // Tipo do título profissional
  bio:                perfil.bio,     // Tipo da biografia
  anoFormatura:       perfil.anoFormatura     // Tipo do ano de formatura
});

// Exibe as informações pessoais na página
exibirInformacoesPessoais(perfil.nome, perfil.tituloProfissional, perfil.bio);

// Exibe o tempo restante para a formatura
exibirFormatura();

// Exibe o dia da semana
exibirDiaSemana();

// Alterna entre modo claro e escuro quando o botão for clicado
botao.addEventListener("click", function() {     // Quando o botão for clicado...
  aplicarModo();     // ...chama a função que aplica o modo correto
});

// Faz o Quiz aparecer na tela
mostrarPergunta();

// Faz as Habilidades aparecerem na tela
exibirHabilidades();

// Faz os Projetos aparecerem na tela
exibirProjetos();

// ─── Evento do Botão de Enviar Avaliação por E-mail ──────────────────────────────────────────────────────
document.getElementById("btnEnviarEmail").addEventListener("click", function() {     // Quando o botão for clicado...
  enviarAvaliacaoEmail();     // ...chama a função que valida e abre o e-mail
});




// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//======== Estruturas de Controle (Condicionais e Loops) =============    
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
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// =========== Aula (12/05/2026) de Arrays e Objetos ===========
/*debugger; // Serve para pausar a execução do código nesse ponto, permitindo que você inspecione variáveis e o fluxo do programa no console do navegador. É uma ferramenta útil para encontrar e corrigir erros no código.
'use strict'; // Ativa o modo estrito, que ajuda a identificar erros comuns e a escrever um código mais seguro. Por exemplo, ele impede o uso de variáveis não declaradas, o que pode evitar muitos bugs.
document.write("<p>Olá, mundo!</p>"); 

let frutas = ["Maçã", "Banana", "Laranja"];

frutas.pop(); // Remove o último item do array (Laranja)

frutas.push("Uva", "Cereja"); // Adiciona novos itens ao final do array (Uva, Cereja)

frutas.unshift("Abacaxi", "Nactarina"); // Adiciona um item no início do array (Abacaxi e Nactarina)

frutas.shift(); // Remove o primeiro item do array (Abacaxi)

console.log(frutas); // Exibe o array atualizado no console (Nactarina, Maçã, Banana, Uva, Cereja)
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

console.log(frutas.indexOf("Banana")); // Retorna o índice do item "Banana" no array (2)
console.log(frutas.includes("Kiwi")); // Verifica se o item "Kiwi" está presente no array (false)
console.log(frutas.length); // Retorna o número de itens no array (5)

frutas.forEach(function(fruta) {
  console.log(fruta); // Exibe cada fruta do array no console (Nactarina, Maçã, Banana, Uva, Cereja)
});

frutas.splice(2, 1, "Melancia"); // Remove o item no índice 2 e adiciona "Melancia" no lugar
console.log(frutas); // Exibe o array atualizado no console (Nactarina, Maçã, Melancia, Uva, Cereja)

frutas.splice(1, 0, "Pera"); // Adiciona "Pera" no índice 1 sem remover nenhum item
console.log(frutas); // Exibe o array atualizado no console (Nactarina, Pera, Maçã, Melancia, Uva, Cereja)

frutas.splice(3, 2); // Remove 2 itens a partir do índice 3 (Melancia e Uva)
console.log(frutas); // Exibe o array atualizado no console (Nactarina, Pera, Maçã, Cereja)

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//======== Aula (15/05/2026) de Funções =============
//Calculo de IMC usando funções aninhadas (função que retorna outra função)

function meuPeso(peso) {
    return function (altura) {
        return peso / (altura ** 2);
    }
}

// Calculando com seus dados: 82kg e 1.75m
let valorIMC = meuPeso(82)(1.75);
*/
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------