const corSelecionada = document.querySelector("#corSelecionada");
const exibirCorSelecionada = document.querySelector("#exibirCorSelecionada");

//função para atualizar a cor exibida quando a seleção mudar

function atualizarCorExibida()
{
    const corSelecionadaValue = corSelecionada.value;
    exibirCorSelecionada.textContent = `Cor Selecionada: ${corSelecionada.value}`;
    exibirCorSelecionada.style.color = corSelecionadaValue;
}

//Adicionando um ouvinte de evento change ao select

corSelecionada.addEventListener("change", atualizarCorExibida);

//inicializando a cor exibida

atualizarCorExibida();