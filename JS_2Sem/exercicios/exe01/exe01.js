var barraProgresso = document.querySelector(".progress");
barraProgresso.style.display = "none";

function enviar() {
  var nome = document.getElementById("inputNome").value;
  var idade = parseInt(document.getElementById("inputIdade").value);
  var cidade = document.getElementById("inputCidade").value;

  var validaCampos = valida(nome, idade, cidade);
  if (validaCampos == true) {
    return;
  }
  barraProgresso.style.display = "block";
  barra(nome, idade, cidade);
}

function valida(nome, idade, cidade) {
  if (nome == "" || idade == "" || cidade == "") {
    document.getElementById("resultado").innerHTML = `
        <div class="alert alert-danger fade show">
        <div class="d-flex justify-content-between"
                <span>Preencha todos os campos</span>
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
              </div>
        </div>`;
    return true;
  } else {
    var validandoIdade = validaIdade(idade);
    if (validandoIdade == false) {
      return false;
    } else {
      return true;
    }
  }
}

function validaIdade(idade) {
  if (idade < 0 || idade > 150) {
    document.getElementById("resultado").innerHTML = `
        <div class="alert alert-danger fade show">
              <div class="d-flex justify-content-between"
                <span>Idade inválida</span>
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
              </div>
        </div>`;
    return true;
  } else {
    return false;
  }
}

//Barra de progresso.
function barra(nome, idade, cidade)
{
        // Define a função para animar a barra de progresso
        //function animarBarraDeProgresso() {
            
        var progress = 0;
        var barra = document.querySelector(".progress-bar");
        var intervalo = setInterval(function () {
            if (progress > 100) {
                clearInterval(intervalo);
                barraProgresso.style.display = "none";
                mostrar(nome, idade, cidade);
            } else {
                progress++;
                barra.style.width = progress + "%";
            }
        }, 50);  // Aumenta a cada 50 milissegundos (ajuste conforme necessário)
}

function mostrar(nome, idade, cidade){
    document.getElementById("resultado").innerHTML = `
      <div class="alert alert-success fade show">
            <div class="d-flex justify-content-between">
              <span>Informações: ${nome}, ${idade} anos, ${cidade}</span>
              <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
      </div>`;
}