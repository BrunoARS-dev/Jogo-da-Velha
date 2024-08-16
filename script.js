var count = 1;


function marcarCasa(element){

    console.log(element);
    const jogador = document.querySelector("#player span");

    if(element.classList.contains("circle") || element.classList.contains("x")){
        

    } else { 
        if(jogador.classList.contains("player2")){
            element.classList.toggle('circle');
            jogador.classList.toggle("player2");
            jogador.textContent = "Player 1";
            count++;
            console.log(count)

        } else {
            element.classList.toggle('x');
            jogador.classList.toggle("player2");
            jogador.innerHTML = "Player 2";
            count++;
            console.log(count);
        }
    } 
        verificarVencedor()
    
}

function verificarVencedor(){
    const um = document.getElementById("1");
    const dois = document.getElementById("2");
    const tres = document.getElementById("3");
    const quatro = document.getElementById("4");
    const cinco = document.getElementById("5");
    const seis = document.getElementById("6");
    const sete = document.getElementById("7");
    const oito = document.getElementById("8");
    const nove = document.getElementById("9");
    const vencerdor = document.querySelector(".modal span");
    const modal = document.querySelector(".modal");
    const overlay = document.getElementById("overlay");
    const score1 = document.querySelector(".score-player1 span");
    const score2 = document.querySelector(".score-player2 span");

    if (um.classList.contains("x") &&
        dois.classList.contains("x") &&
        tres.classList.contains("x") ||
        quatro.classList.contains("x") &&
        cinco.classList.contains("x") &&
        seis.classList.contains("x") ||
        sete.classList.contains("x") &&
        oito.classList.contains("x") &&
        nove.classList.contains("x") ||
        um.classList.contains("x") &&
        cinco.classList.contains("x") &&
        nove.classList.contains("x") ||
        sete.classList.contains("x") &&
        cinco.classList.contains("x") &&
        tres.classList.contains("x") ||
        um.classList.contains("x") &&
        quatro.classList.contains("x") &&
        sete.classList.contains("x") ||
        dois.classList.contains("x") &&
        cinco.classList.contains("x") &&
        oito.classList.contains("x") ||
        tres.classList.contains("x") &&
        seis.classList.contains("x") &&
        nove.classList.contains("x")){

            vencerdor.textContent = "Player 1 Venceu";
            vencerdor.classList.remove('player2');
            modal.classList.remove("none");
            overlay.classList.remove("none");
            score1.textContent = parseInt(score1.innerHTML) + 1;

    } else if(um.classList.contains("circle") &&
         dois.classList.contains("circle") &&
         tres.classList.contains("circle") ||
         quatro.classList.contains("circle") &&
         cinco.classList.contains("circle") &&
         seis.classList.contains("circle") ||
         sete.classList.contains("circle") &&
         oito.classList.contains("circle") &&
         nove.classList.contains("circle") ||
         um.classList.contains("circle") &&
         cinco.classList.contains("circle") &&
         nove.classList.contains("circle") ||
         sete.classList.contains("circle") &&
         cinco.classList.contains("circle") &&
         tres.classList.contains("circle") ||
         um.classList.contains("circle") &&
         quatro.classList.contains("circle") &&
         sete.classList.contains("circle") ||
         dois.classList.contains("circle") &&
         cinco.classList.contains("circle") &&
         oito.classList.contains("circle") ||
         tres.classList.contains("circle") &&
         seis.classList.contains("circle") &&
         nove.classList.contains("circle")){

            vencerdor.textContent = "Player 2 venceu!";
            vencerdor.classList.add('player2');
            modal.classList.remove("none");
            overlay.classList.remove("none");
            score2.textContent = parseInt(score2.innerHTML) + 1;

         } else if(count > 9){
            vencerdor.textContent = "Ninguém venceu";
            modal.classList.remove("none");
            overlay.classList.remove("none");
         }
  
}

function fecharModal(){
    const modal = document.querySelector(".modal")
    const overlay = document.getElementById("overlay")
    modal.classList.add("none")
    overlay.classList.add("none")
}

function resetMatch(){

    const um = document.getElementById("1");
    const dois = document.getElementById("2");
    const tres = document.getElementById("3");
    const quatro = document.getElementById("4");
    const cinco = document.getElementById("5");
    const seis = document.getElementById("6");
    const sete = document.getElementById("7");
    const oito = document.getElementById("8");
    const nove = document.getElementById("9");


    um.classList.remove('x', 'circle');
    dois.classList.remove('x', 'circle');
    tres.classList.remove('x', 'circle');
    quatro.classList.remove('x', 'circle');
    cinco.classList.remove('x', 'circle');
    seis.classList.remove('x', 'circle');
    sete.classList.remove('x', 'circle');
    oito.classList.remove('x', 'circle');
    nove.classList.remove('x', 'circle');

    count = 1;
    fecharModal()
}


function tema(){
    html = document.documentElement;
    html.classList.toggle('dark')
}

