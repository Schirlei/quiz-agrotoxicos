const alternativas= document.querySelectorAll("li")
console.log(alternativas)

for(let alternativa of alternativas){
   alternativa.addEventListener("click", verifica)

}

function verifica (evento){
    const alternativaclicada= evento.target
    const blocopergunta= alternativaclicada.parentElement.parentElement.classList[1]
    console.log(blocopergunta)
    const correta= alternativaclicada.classList.contains("correct")
    const respostacorreta= document.querySelector("." + blocopergunta + " .correct-answer") //seletor + classe + espaço (descendente) nome da classe 
    const respostaerrada= document.querySelector(".wrong-answer")
    const blocoresposta= document.querySelector(".answer")
    blocoresposta.style.display="initial"
    if (correta) respostacorreta.style.display= "initial"
    else respostaerrada.style.display= "initial"
    console.log(alternativaclicada, correta)
    
}

