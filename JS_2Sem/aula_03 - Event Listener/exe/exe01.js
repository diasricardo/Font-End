const contadorElemento = document.querySelector("#contador");
const btnAumentar = document.querySelector("#aumentar");
const btnDiminuir = document.querySelector("#diminuir");
const btnZerar = document.querySelector("#zerar");

let contador = 0;

//função para atualizar o valor do contador no elemento do DOM

function atualizarContador(){
    contadorElemento.textContent = contador;
}
//aumentando contador
function aumentarContador()
{
    contador++;
    atualizarContador();
}

function diminuirContador()
{
    if(contador > 0){
        contador--;
        atualizarContador();
    }
    else
    {
        alert("Contador zerado");
    }
}

function zerarContador()
{
    contador = 0;
    atualizarContador();
}

//adicionando ouvintes de eventos aos botoes

btnAumentar.addEventListener("click", aumentarContador);
btnDiminuir.addEventListener("click", diminuirContador);
btnZerar.addEventListener("click", zerarContador);

atualizarContador();