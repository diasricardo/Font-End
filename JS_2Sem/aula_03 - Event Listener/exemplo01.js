//Selecionando botao pelo ID
const botao = document.querySelector("#botao");
const contadorElemento = document.querySelector("#contador");

//inicializando contador
let contador = 0;

//função que sera chamad quando o botao for clicado

function aumentarContador()
{
    contador++;
    contadorElemento.textContent = contador;
}


//Adicionando ouvinte do evento para o clique do botao

botao.addEventListener("click", aumentarContador);