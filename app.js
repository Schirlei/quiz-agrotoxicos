const alternativas= document.querySelectorAll("li")
console.log(alternativas)

for(let alternativa of alternativas){
   alternativa.addEventListener("click", verifica)

}

function verifica (evento){
    const alternativaclicada= evento.target
    const blocopergunta= alternativaclicada.parentElement.parentElement
    console.log(blocopergunta)
    const correta= alternativaclicada.classList.contains("correct")
    const respostacorreta= blocopergunta.querySelector(".correct-answer") //seletor + classe + espaço (descendente) nome da classe 
    const respostaerrada= blocopergunta.querySelector(".wrong-answer")
    const blocoresposta= blocopergunta.querySelector(".answer")
    blocoresposta.style.display="initial"
    if (correta) respostacorreta.style.display= "initial"
    else respostaerrada.style.display= "initial"
    console.log(alternativaclicada, correta)
    
}

