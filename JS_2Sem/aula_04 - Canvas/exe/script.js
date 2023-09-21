// atribui a uma variavel o elemento selecionado
var canvas = document.querySelector("canvas");

// define o tamanho do canvas
canvas.width = 800;
canvas.height = 600;

// a variavel c se torna um objeto onde pode ser atribuido métodos
var c = canvas.getContext('2d');
var intervalo;

function mudarPosicao() {
    var circulo = 0;
    
    intervalo = setInterval(function () {
        if (circulo > 100) { // Defina um limite de progresso
            clearInterval(intervalo); // Interrompe o intervalo quando o limite for atingido
            return;
        }

        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;

        c.beginPath();
        c.arc(x, y, Math.random() * 100, 0, Math.PI * 2);
        c.fillStyle = "rgba(0,0,255,0.5)";
        c.stroke();
        c.fill();
        c.closePath();
        document.querySelector("#contador").innerHTML = circulo;
        circulo++;
    }, 50);
}

mudarPosicao();