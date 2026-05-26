// ======== Modo claro e escuro ========

const botao = document.getElementById("modoClaro/Azul");     // Pega o botão no HTML pelo seu ID

let claro = true;     // Variável que controla qual modo está ativo no momento (começa no modo claro)

// ─── Função que CRIA o objeto com as configurações de cada modo ───────────
function criarModo(corFundo, corTexto, textoBotao) {     // Recebe as 3 configurações do modo como parâmetros
  return {     // Devolve um objeto com os dados organizados
    corFundo:   corFundo,    // Cor de fundo da página
    corTexto:   corTexto,    // Cor do texto da página
    textoBotao: textoBotao   // Texto que o botão vai exibir
  };
}

// ─── Função que aplica o modo na página ──────────────────────────────────
function aplicarModo() {     // Chamada sempre que o botão for clicado
  const modo = claro
    ? criarModo("black", "blue", "Modo Claro")   // Modo azul: fundo preto, texto azul
    : criarModo("white", "black", "Modo Azul"); // Modo claro: fundo cinza, texto preto

  document.body.style.backgroundColor = modo.corFundo;    // Aplica a cor de fundo na página
  document.body.style.color           = modo.corTexto;    // Aplica a cor do texto na página
  botao.textContent                   = modo.textoBotao;  // Atualiza o texto do botão

  claro = !claro;     // Inverte o estado: se era true vira false, se era false vira true
}
// --------------------------------------------------------------------------------------------------------------------------------------


// ============== Data atual =====================
const hoje     = new Date();          // Pega a data atual
const anoAtual = hoje.getFullYear();  // Extrai o ano atual
const mesAtual = hoje.getMonth() + 1; // Extrai o mês atual (começa do 0, por isso soma 1)
const diaAtual = hoje.getDate();      // Extrai o dia atual



// ─── Função que CRIA o objeto com os dados pessoais ──────────────────────
function criarPerfil(nome, tituloProfissional, bio, anoFormatura, mesFormatura, diaFormatura, anoIngresso, mesIngresso, diaIngresso) {     // Recebe todos os dados pessoais como parâmetros
  return {     // Devolve um objeto com todos os dados organizados
    nome:               nome,               // Nome completo
    tituloProfissional: tituloProfissional, // Título profissional
    bio:                bio,                // Biografia
    anoFormatura:       anoFormatura,       // Ano de formatura
    mesFormatura:       mesFormatura,       // Mês de formatura
    diaFormatura:       diaFormatura,       // Dia de formatura
    anoIngresso:        anoIngresso,        // Ano de ingresso no curso
    mesIngresso:        mesIngresso,        // Mês de ingresso no curso
    diaIngresso:        diaIngresso         // Dia de ingresso no curso
  };
}

// ─── Função que exibe os dados pessoais na página ────────────────────────
function exibirInformacoesPessoais(nome, titulo, bio) {     // Recebe o nome, título e bio como parâmetros
  document.getElementById("meuNome").textContent          = nome;    // Injeta o nome no elemento HTML correspondente
  document.getElementById("tituloProfissional").innerHTML = titulo;  // Injeta o título no elemento HTML correspondente
  document.getElementById("minhaBio").textContent         = bio;     // Injeta a bio no elemento HTML correspondente
}

// ─── Cria o perfil chamando a função com os valores ──────────────────────
const perfil = criarPerfil(     // Chama a função passando todos os dados e guarda o objeto retornado
  "Luiz Fernandes",
  "Desenvolvedor de Sistemas / Faço de Tudo",
  "Sou um desenvolvedor em processo de aprendizado, por mais que todo desenvolvedor sempre estará em processo de aprendizado, devido a evolução contínua da tecnologia. A minha meta como desenvolvedor é criar coisas que realmente ajudem, divirta ou seja util para as pessoas, seja um site, um aplicativo, um jogo ou qualquer outra solução que possa fazer a vida das pessoas mais fácil ou mais divertida. Estou sempre disposto a tentar algo novo, mesmo não sabendo ao certo se vai dar certo ou se serei capaz de realizar, pois é melhor morrer sabendo que tentou, do que morre sem ter nem tentado.",
  2026, "12", "31",     // Ano, mês e dia de formatura
  2025, "2",  "12"      // Ano, mês e dia de ingresso
);
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// ========= Data de Termino do Curso ============

// ─── Função que CRIA a parte do tempo (ano, mês ou dia) ──────────────────
function criarParte(diferenca, singular, plural) {     // Recebe a diferença, o nome no singular e no plural
  if (diferenca === 1) return `${diferenca} ${singular}`;  // Se a diferença for 1, usa o singular (ex: "1 ano")
  if (diferenca > 1)  return `${diferenca} ${plural}`;    // Se for maior que 1, usa o plural (ex: "2 anos")
  return null;     // Se for 0 ou negativo, não tem nada a mostrar
}

// ─── Função que CRIA a frase completa do tempo restante ──────────────────
function criarTempoRestante(anoFormatura, mesFormatura, diaFormatura, anoAtual, mesAtual, diaAtual) {     // Recebe as datas de formatura e atual como parâmetros
  const partes = [];     // Array que vai guardar cada parte do tempo restante

  const parteAnos  = criarParte(anoFormatura - anoAtual, "ano", "anos");    // Cria a parte dos anos
  const parteMeses = criarParte(mesFormatura - mesAtual, "mês", "meses");   // Cria a parte dos meses
  const parteDias  = criarParte(diaFormatura - diaAtual, "dia", "dias");    // Cria a parte dos dias

  if (parteAnos)  partes.push(parteAnos);   // Se tiver anos restantes, adiciona ao array
  if (parteMeses) partes.push(parteMeses);  // Se tiver meses restantes, adiciona ao array
  if (parteDias)  partes.push(parteDias);   // Se tiver dias restantes, adiciona ao array

  if (partes.length > 0) {     // Se ainda houver tempo restante...
    return `Tempo restante para a formatura: ${partes.join(", ")}`;  // ...junta tudo em uma frase
  } else {     // Se não houver mais tempo restante...
    return `Já se formou!`;  // ...retorna a mensagem de formatura
  }
}

// ─── Função que exibe tudo na página ─────────────────────────────────────
function exibirFormatura() {     // Chamada para mostrar as informações de formatura na página
  document.getElementById("anoFormatura").textContent =
    "Ano de formatura: " + perfil.anoFormatura;     // Exibe o ano de formatura no elemento HTML correspondente

  const frase = criarTempoRestante(     // Chama a função que calcula e monta a frase do tempo restante
    perfil.anoFormatura, perfil.mesFormatura, perfil.diaFormatura,
    anoAtual, mesAtual, diaAtual
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


// ======== Isso serve para mostrar quando da semana estamos ==========

// ─── Função que CRIA o nome do dia baseado no número ─────────────────────
function criarDiaSemana(diaSemana) {     // Recebe o número do dia da semana como parâmetro
  switch (diaSemana) {     // Verifica qual número foi recebido e retorna o nome correspondente
    case 1: return "Domingo";       // Se for 1, devolve "Domingo"
    case 2: return "Segunda-feira"; // Se for 2, devolve "Segunda-feira"
    case 3: return "Terça-feira";   // Se for 3, devolve "Terça-feira"
    case 4: return "Quarta-feira";  // Se for 4, devolve "Quarta-feira"
    case 5: return "Quinta-feira";  // Se for 5, devolve "Quinta-feira"
    case 6: return "Sexta-feira";   // Se for 6, devolve "Sexta-feira"
    case 7: return "Sábado";        // Se for 7, devolve "Sábado"
    default: return "Dia inválido"; // Se não for nenhum dos casos, devolve "Dia inválido"
  }
}

// ─── Função que exibe o dia da semana na página ──────────────────────────
function exibirDiaSemana() {     // Chamada para mostrar o dia atual na página
  const diaSemana  = hoje.getDay() + 1;          // Pega o dia atual (começa do 0, por isso soma 1)
  const diaEscrito = criarDiaSemana(diaSemana);  // Chama a função que converte o número no nome do dia

  document.getElementById("diaSemana").innerHTML = `<p>Hoje é: ${diaEscrito}</p>`;     // Injeta o dia na página
}
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// ========= Efeito que hover nos balões da imagem Pokémon =========

function ativarHoverPokemon() {
    const areas   = document.querySelectorAll(".area-habilidade");  // Pega todas as áreas do mapa
    const img     = document.getElementById("imgPokemon");          // Pega a imagem
    const tooltip = document.getElementById("tooltipHabilidade");   // Pega o tooltip

    areas.forEach(function(area) {

        // Quando o mouse entra na área...
        area.addEventListener("mouseenter", function(e) {
            img.classList.add("hover-ativo");                        // Aplica o zoom na imagem
            tooltip.textContent = area.dataset.habilidade;          // Coloca o nome da habilidade no tooltip
            tooltip.style.opacity = "1";                            // Mostra o tooltip
        });

        // Quando o mouse se move, o tooltip segue o cursor
        area.addEventListener("mousemove", function(e) {
            const rect   = img.getBoundingClientRect();              // Posição da imagem na tela
            const x      = e.clientX - rect.left + 10;              // X relativo à imagem
            const y      = e.clientY - rect.top  - 30;              // Y relativo à imagem
            tooltip.style.left = x + "px";
            tooltip.style.top  = y + "px";
        });

        // Quando o mouse sai da área...
        area.addEventListener("mouseleave", function() {
            img.classList.remove("hover-ativo");                     // Remove o zoom
            tooltip.style.opacity = "0";                            // Esconde o tooltip
        });
    });
}


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// =========Quiz============
// ─── QUIZ Sobre a vida / espaço ───────────────────────────────────────────

const btnVisual     = document.getElementById("escolhaExperencial");  // Pega o botão "Visual" no HTML pelo seu ID
const btnLogica     = document.getElementById("escolhaLogica");       // Pega o botão "Lógica" no HTML pelo seu ID
const resultadoQuiz = document.getElementById("resultado-quiz");      // Pega o elemento que vai exibir o resultado final
const textoPergunta = document.getElementById("texto-pergunta");      // Pega o elemento que vai exibir o texto da pergunta atual

let pontosFront = 0;   // Contador de pontos do perfil "Experienciador"
let pontosBack  = 0;   // Contador de pontos do perfil "Observador"
let indice      = 0;   // Controla qual pergunta está sendo exibida no momento

// ─── Função que CRIA cada objeto de pergunta ─────────────────────────────
function criarPergunta(pergunta, opcaoVisual, opcaoLogica) {     // Recebe os 3 dados de cada pergunta como parâmetros
  return {     // Devolve um objeto com os dados organizados
    pergunta:    pergunta,    // Texto da pergunta
    opcaoVisual: opcaoVisual, // Texto do botão Visual
    opcaoLogica: opcaoLogica  // Texto do botão Lógica
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
  ), 
  criarPergunta(
    "Quando você entra em um lugar novo, o que chama mais sua atenção?",
    "👀 O quanto aquele lugar é divertido e como você se sente ali.",
    "🧠 As pequenas atitudes das pessoas e como elas interagem entre si."
  ),
  criarPergunta(
    "Em uma conversa, você costuma…",
    "💬 Entrar no clima, rir, sentir a energia e viver o momento.",
    "🧐 Pensar nas implicações e consequências das palavras que você diz, e como isso pode afetar os outros. Semprepensando em dar a melhor resposta possível."
  ), 
  criarPergunta(
    "Qual dessas frases parece mais com você?",
    "😊 Nem tudo precisa fazer sentido para valer a pena.",
    "😟 Às vezes entender demais tira a leveza das coisas."
  ),
  criarPergunta(
    "Quando alguém te conta um problema, você tende a…",
    "😤 Tentar fazer a pessoa se sentir melhor naquele momento.",
    "🤔 Tentar entender a raiz do problema e analisar a situação, afim de entregar uma solução definitiva."
  ),
  criarPergunta(
    "Quando você vê uma paisagem bonita, qual é sua reação mais natural?",
    "😍 Parar por um momento e simplesmente sentir a sensação que aquele lugar te proporciona.",
    "🧐 Pensar em como aquele lugar faz você refletir sobre a vida, o tempo ou memórias do passado."
  ),
  criarPergunta(
    "Quando alguém faz algo estranho, você tende a…",
    "🫤 Não pensar muito sobre isso e seguir normalmente.",
    "🤔 Ficar tentando entender o motivo daquela atitude."
  ),
  criarPergunta(
    "Quando você lembra do passado, o que mais pesa?",
    "😔 A saudade dos momentos que te fizeram sentir vivo e se divertir.",
    "😔 As reflexões e significados que você tirou daquilo tudo que você viveu, das pessoas que conheceu e das experiências que te moldaram."
  )
];

// ─── Função que atualiza a pergunta e os botões na tela ──────────────────
function mostrarPergunta() {     // Chamada sempre que precisar exibir a pergunta atual
  const atual = perguntas[indice];     // Pega o objeto da pergunta na posição do índice atual

  textoPergunta.innerHTML = atual.pergunta;    // Coloca o texto da pergunta no elemento HTML
  btnVisual.innerHTML     = atual.opcaoVisual; // Atualiza o texto do botão Visual
  btnLogica.innerHTML     = atual.opcaoLogica; // Atualiza o texto do botão Lógica
}

// ─── Função que monta o HTML do resultado ────────────────────────────────
function criarResultado(tipo) {     // Recebe "experienciador" ou "observador" e devolve o HTML do resultado
  if (tipo === "experienciador") {
    return {
      html: `
        <strong>🎨 Você tem o perfil de um experienciador</strong><br>
        Você é alguém que prefere viver a vida sem questionar demais, focando no que é imediato e tangível.
        O problema é que você acaba se limitando a um mundo de sensações e experiências, sem conseguir enxergar como o mundo funciona de verdade.
        O preço da sua felicidade é a sua efemeridade.
      `,
      cor: "#e8f8f0"     // Cor de fundo verde para o perfil experienciador
    };
  } else {
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

// ─── Função que calcula e exibe o resultado final ────────────────────────
function exibirPerfil() {     // Chamada quando todas as perguntas forem respondidas
  btnVisual.style.display = "none";   // Esconde o botão Visual pois o quiz acabou
  btnLogica.style.display = "none";   // Esconde o botão Lógica pois o quiz acabou

  const tipo      = pontosFront >= pontosBack ? "experienciador" : "observador";  // Define o perfil comparando os pontos
  const resultado = criarResultado(tipo);     // Chama a função que monta o HTML do resultado

  resultadoQuiz.innerHTML             = resultado.html;  // Injeta o HTML do resultado na página
  resultadoQuiz.style.backgroundColor = resultado.cor;   // Aplica a cor de fundo do perfil
  resultadoQuiz.style.padding         = "12px";          // Adiciona espaçamento interno ao bloco de resultado
  resultadoQuiz.style.borderRadius    = "8px";           // Arredonda as bordas do bloco de resultado
  resultadoQuiz.style.marginTop       = "10px";          // Adiciona espaço acima do bloco de resultado
}

// ─── Função chamada quando qualquer botão é clicado ──────────────────────
function proximaPergunta(tipo) {     // Recebe "visual" ou "logica" dependendo do botão clicado
  if (tipo === "visual") pontosFront++;  // Se clicou no Visual, soma 1 ponto no perfil Experienciador
  if (tipo === "logica") pontosBack++;   // Se clicou no Lógica, soma 1 ponto no perfil Observador

  indice++;     // Avança o índice para a próxima pergunta

  if (indice < perguntas.length) {  // Se ainda houver perguntas...
    mostrarPergunta();              // ...exibe a próxima pergunta
  } else {                          // Se não houver mais perguntas...
    exibirPerfil();                 // ...calcula e exibe o resultado final
  }
}

// ─── Eventos dos botões ───────────────────────────────────────────────────
btnVisual.addEventListener("click", function() {    // Quando o botão Visual for clicado...
  proximaPergunta("visual");     // ...chama a função passando "visual" como tipo
});

btnLogica.addEventListener("click", function() {    // Quando o botão Lógica for clicado...
  proximaPergunta("logica");     // ...chama a função passando "logica" como tipo
});
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// ========= Frases de Filósofos =========

// ─── Função que CRIA o card HTML de uma frase ────────────────────────────
function criarCardFrase(texto, autor) {     // Recebe o texto e o autor da frase
    const card = document.createElement("div");  // Cria um elemento div
    card.className = "frase-card";               // Aplica a classe de estilo

    card.innerHTML = `
        <p>"${texto}"</p>
        <span>— ${autor}</span>
    `;

    return card;     // Devolve o card pronto
}

async function buscarFrases() {        // Função assíncrona para buscar as frases da API e exibir na página
    const input  = document.getElementById("inputFrase");       // Pega o campo de input onde o usuário digita o termo de busca
    const status = document.getElementById("statusFrases");       // Pega o elemento onde serão exibidas mensagens de status (buscando, erros, etc)
    const lista  = document.getElementById("listaFrases");       // Pega o container onde os cards de frases serão exibidos
    const termo  = input.value.trim().toLowerCase();         // Pega o termo digitado, remove espaços extras e converte para minúsculas

    if (termo === "") {        // Se o campo de busca estiver vazio...
        status.textContent = "⚠️ Digite um nome ou tema antes de buscar.";      // Exibe uma mensagem de aviso e não faz a busca
        return;
    }

    status.textContent = "🔍 Buscando frases...";       
    lista.innerHTML    = "";

    try {
        // Busca todas as 100 frases (limite máximo da API)       // OBS: A API não suporta busca por termo, então buscamos tudo e filtramos localmente
        const resposta = await fetch("https://dummyjson.com/quotes?limit=100");       // Faz a requisição para a API e espera a resposta
        const dados    = await resposta.json();        // Converte a resposta para JSON e espera o resultado

        // Filtra localmente pelo termo digitado (autor ou trecho da frase)
        const encontradas = dados.quotes.filter(function(frase) {         // Para cada frase, verifica se o autor ou o texto da frase contém o termo de busca
            return frase.author.toLowerCase().includes(termo) ||         // Verifica se o nome do autor contém o termo (ignorando maiúsculas/minúsculas). O includes retorna true se o termo for encontrado, ou false se não for encontrado. Os símbolos || servem para dizer "ou", ou seja, basta que o termo esteja presente no autor ou na frase para ser considerada uma correspondência.
                   frase.quote.toLowerCase().includes(termo);           // Verifica se o texto da frase contém o termo (ignorando maiúsculas/minúsculas)
        });

        if (encontradas.length === 0) {
            status.textContent = "❌ Nenhuma frase encontrada. Tente: Einstein, life, success, mind...";        // Se nenhuma frase for encontrada, exibe uma mensagem de erro e sugestões de termos para buscar
            return;
        }

        status.textContent = `✅ ${encontradas.length} frase(s) encontrada(s) para "${termo}"`;             // Se frases forem encontradas, exibe a quantidade encontrada e o termo buscado

        encontradas.forEach(function(frase) {          // Para cada frase encontrada, cria um card e adiciona na página
            const card = criarCardFrase(frase.quote, frase.author);          // Cria o card usando a função que criamos, passando o texto e o autor da frase
            lista.appendChild(card);        // Adiciona o card criado dentro do container de lista no HTML
        });

    } catch (erro) {         // Se ocorrer algum erro durante a requisição ou processamento dos dados, exibe uma mensagem de erro e loga o erro no console para depuração
        status.textContent = "❌ Erro ao buscar frases. Verifique sua conexão.";
        console.error(erro);
    }
}

// ─── Eventos da seção de frases ───────────────────────────────────────────
document.getElementById("btnBuscarFrase").addEventListener("click", function() {        // Escuta o evento de clique no botão de busca
    buscarFrases();     // Busca ao clicar no botão
});

document.getElementById("inputFrase").addEventListener("keydown", function(e) {         // Escuta o evento de tecla pressionada no campo de busca
    if (e.key === "Enter") buscarFrases();     // Busca ao pressionar Enter
});

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// ========= Minhas habilidades =============
function criarHabilidades(habilidades) {     // Função que recebe o array de habilidades como parâmetro
  let lista = "<ul>";     // Abre a tag ul que vai envolver todos os itens da lista

  for (let i = 0; i < habilidades.length; i++) {     // Loop que percorre cada item do array, de 0 até o último
    lista += "<li>" + habilidades[i] + "</li>";     // A cada volta, pega a habilidade da posição i e envolve em <li>
  }

  lista += "</ul>";  // Fecha a tag ul depois que todas as habilidades foram adicionadas
  return lista;      // Devolve a lista completa em HTML para quem chamou a função
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
    nome:               nome,               // Nome do projeto
    tecnologias:        tecnologias,        // Array com as tecnologias usadas
    conhecimentos:      conhecimentos,      // Ferramentas e conhecimentos aplicados
    descricao:          descricao,          // Descrição do projeto
    oQueTenhoQueAturar: oQueTenhoQueAturar  // Array com os desafios enfrentados
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
  const formato = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Expressão regular que verifica o formato nome@dominio.extensao
  return formato.test(email);     // Retorna true se for válido, false se não for
}

// ─── Função que ABRE o e-mail automaticamente ────────────────────────────
function abrirEmail(emailUsuario) {     // Recebe o e-mail do usuário para colocar no campo "reply-to"
  const destinatario = "luizfernandesdn1@gmail.com";     // E-mail do portfólio
  const assunto      = encodeURIComponent("Avaliação do Portifólio - Site");     // Assunto já preenchido
  const corpo        = encodeURIComponent(`Olá Luiz! Eu vim avaliar o seu portfólio!\n\nMinha avaliação:`);     // Corpo inicial do e-mail

  window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;     // Abre o aplicativo de e-mail
}

// ─── Função que VALIDA e dispara o envio do e-mail ───────────────────────
function enviarAvaliacaoEmail() {     // Chamada quando o usuário clica no botão
  const input    = document.getElementById("inputEmail");    // Pega o campo de e-mail
  const mensagem = document.getElementById("mensagemEmail"); // Pega o elemento de mensagem
  const email    = input.value.trim();                       // Pega o valor digitado e remove espaços extras

  if (email === "") {     // Se o campo estiver vazio...
    mensagem.textContent            = "⚠️ Por favor, digite seu e-mail antes de enviar.";
    mensagem.style.backgroundColor  = "#fff3cd";
    mensagem.style.color            = "#856404";
    return;
  }

  if (!validarEmail(email)) {     // Se o e-mail não tiver o formato correto...
    mensagem.textContent            = "❌ E-mail inválido! Verifique se digitou corretamente (ex: nome@email.com).";
    mensagem.style.backgroundColor  = "#fde8e8";
    mensagem.style.color            = "#842029";
    return;
  }

  mensagem.textContent            = "✅ E-mail válido! Abrindo seu aplicativo de e-mail...";
  mensagem.style.backgroundColor  = "#e8f8f0";
  mensagem.style.color            = "#155724";

  abrirEmail(email);     // Chama a função que abre o aplicativo de e-mail com tudo preenchido
}
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// ========= Scroll de seção em seção ============

const secoes = ["main", "titulo2", "meusProjetos", "quiz", "areaContato"];     // Array com os IDs de cada seção da página, na ordem em que aparecem

let secaoAtual      = 0;      // Controla qual seção está sendo exibida no momento
let scrollBloqueado = false;  // Impede que o scroll dispare várias vezes seguidas

// ─── Função que ROLA a página até a seção correspondente ─────────────────
function irParaSecao(indiceSecao) {     // Recebe o índice da seção para qual deve rolar
  const idSecao  = secoes[indiceSecao];          // Pega o ID da seção pelo índice
  const elemento = document.getElementById(idSecao);  // Encontra o elemento no HTML

  if (elemento) {     // Se o elemento existir...
    elemento.scrollIntoView({ behavior: "smooth" });  // ...rola suavemente até ele
  }
}

// ─── Função que ATIVA o scroll de seção em seção ─────────────────────────
function ativarScrollPorSecao() {     // Chamada uma vez para registrar o evento de scroll
  window.addEventListener("wheel", function(evento) {     // Escuta o movimento da roda do mouse
    if (scrollBloqueado) return;     // Se o scroll estiver bloqueado, ignora o evento

    scrollBloqueado = true;     // Bloqueia para não disparar várias vezes seguidas

    if (evento.deltaY > 0) {     // Se scrollou para baixo...
      if (secaoAtual < secoes.length - 1) secaoAtual++;  // ...avança para a próxima seção
    } else {     // Se scrollou para cima...
      if (secaoAtual > 0) secaoAtual--;  // ...volta para a seção anterior
    }

    irParaSecao(secaoAtual);     // Rola até a seção atual

    setTimeout(function() {      // Depois de 800ms...
      scrollBloqueado = false;   // ...desbloqueia o scroll para aceitar o próximo movimento
    }, 800);
  });
}
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//================================ Funções =============================================

// Exibe o relatório de tipos usando os dados do objeto perfil
criarRelatorioTipos({
  nome:               perfil.nome,
  tituloProfissional: perfil.tituloProfissional,
  bio:                perfil.bio,
  anoFormatura:       perfil.anoFormatura
});

// Funlão que exibe as informações pessoais na página
exibirInformacoesPessoais(perfil.nome, perfil.tituloProfissional, perfil.bio);

// Função que exibe o tempo restante para a formatura
exibirFormatura();

// Função que exibe o dia da semana
exibirDiaSemana();

// Função que alterna entre modo claro e escuro quando o botão for clicado
botao.addEventListener("click", function() {
  aplicarModo();
});

// Função que faz o Quiz aparecer na tela
mostrarPergunta();

// Função que faz as Habilidades aparecerem na tela
// exibirHabilidades();  

// Função que faz os Projetos aparecerem na tela
exibirProjetos();

// Função que ativa o scroll de seção em seção
ativarScrollPorSecao();

// Função que chama a função de enviar e-mail quando o botão é clicado
document.getElementById("btnEnviarEmail").addEventListener("click", function() {
  enviarAvaliacaoEmail();
});

// Função que ativa o hover nos balões da imagem Pokémon
ativarHoverPokemon();

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------