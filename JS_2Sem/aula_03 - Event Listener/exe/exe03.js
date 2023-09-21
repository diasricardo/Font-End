const paisSelecionado = document.querySelector("#paisSelecionado");
const infoPais = document.querySelector("#infoPais");

//objeto ficticio com informaçoes dos paises

const informacoesPaises = {
    brasil: {
        nome: "Brasil",
        capital: "Brasília",
        populacao: "209 milhões",
        idioma: "Português"
    },
    eua: {
        nome: "Estados Unidos",
        capital: "Washington, D.C.",
        populacao: "331 milhões",
        idioma: "Inglês"
    },
    canada: {
        nome: "Canadá",
        capital: "Ottawa",
        populacao: "37 milhões",
        idioma: "Inglês e Francês"
    },
    franca: {
        nome: "França",
        capital: "Paris",
        populacao: "67 milhões",
        idioma: "Francês"
    },
    japao: {
        nome: "Japão",
        capital: "Tóquio",
        populacao: "126 milhões",
        idioma: "Japonês"
    }
};

//função para atualizar as informações do pais selecionado.
function atualizarInformacoesPais()
{
    const paisSelecionadoValue = paisSelecionado.value;
    const paisInfo = informacoesPaises[paisSelecionadoValue];

    if(paisInfo){
        infoPais.textContent = `Pais: ${paisInfo.nome}, Capital: ${paisInfo.capital}, População: ${paisInfo.populacao}, Idioma: ${paisInfo.idioma}`;

    }else{
        infoPais.textContent = "Informações do pais nao encontradas";
    }
}

//adicionando um ouvinte ao evento change
paisSelecionado.addEventListener("change", atualizarInformacoesPais);

//inicialize as informações com o primeiro pais da lista suspensa

atualizarInformacoesPais();