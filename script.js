const perguntas = [
    {
       pergunta: "Qual é o nome do protagonista de Hunter x Hunter?",
       respostas: [
        "Gon Freecss",
        "Killua Zoldyck",        
        "Kurapika",
       ],
       correta: 0
    },

    {
        pergunta: "Qual é o objetivo principal de Gon Freecss em Hunter x Hunter?",
        respostas: [
         "Encontrar o pai",
         "Se tornar o melhor caçador",        
         "Vingar a morte da família",
        ],
        correta: 0
     },

    {
        pergunta: "Qual é o nome da técnica especial de Killua Zoldyck em Hunter x Hunter?",
        respostas: [
         "Thunderbolt",
         "Godspeed",        
         "Lightning Strike",
        ],
        correta: 1
    },

    {
        pergunta: "Qual personagem tem o objetivo de vingar a seu clã?",
        respostas: [
         "Leorio Paradinight",
         "killua Zoldyck",        
         "Kurapika",
        ],
        correta: 2
    },
     
    {
        pergunta: "Qual é o nome do exame que os personagens principais precisam passar para se tornarem caçadores em Hunter x Hunter?",
        respostas: [
         "Exame Hunter",
         "Exame de Nen",        
         "Exame de Admissão",
        ],
        correta: 0
    },

    {
        pergunta: "Quem ensinou as primeiras tecnicas nen para Gon Freecss e Killua Zoldyck?",
        respostas: [
         "Kite",
         "Biscuit Krueger",        
         "Wing",
        ],
        correta: 2
    },

    {
        pergunta: "Qual é o tipo de nen do Leorio Paradinight?",
        respostas: [
         "Fortificador",
         "Emissor",        
         "Especialista",
        ],
        correta: 1
    },

    {
        pergunta: "Quem é o antagonista principal na saga das formigas quimera em Hunter x Hunter?",
        respostas: [
         "Shaiapouf",
         "Neferpitou",        
         "Meruem",
        ],
        correta: 2
    },

    {
        pergunta: "Qual é o nome da técnica de Nen especial de Hisoka em Hunter x Hunter?",
        respostas: [
         "Texture Surprise",
         "Gum Whip",        
         "Bungee Gum",
        ],
        correta: 2
    },

    {
        pergunta: "Qual o nome da irmã do Killua Zoldyck que salvou a vida de Gon Freecss?",
        respostas: [
         "Kalluto Zoldyck",
         "Alluka Zoldyck",        
         "Illumi Zoldyck",
        ],
        correta: 1
    },
];

// buscar elemento html
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou repetição \\
for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta;
    
    for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        
        //comparar resposta com a resposta correta
        dt.querySelector('input').onchange = (event) => {
          const estaCorreta = event.target.value == item.correta
          
          //deletar item se a reposta for errada
          corretas.delete(item)

          //adicionar item se estiver certa
          if(estaCorreta){
            corretas.add(item)
          }

          mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
           
        quizItem.querySelector('dl').appendChild(dt)
    }

    //remover primeira resposta
    quizItem.querySelector('dl dt').remove()

    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
}