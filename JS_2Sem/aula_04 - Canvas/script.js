//atribui a uma variavel o elemento selecionado
canvas = document.querySelector("canvas");

//define o tamanho do canvas
canvas.width = 800;
canvas.height = 600;

//a variavel c se torna um objeto onde pode ser atribuido métodos
c = canvas.getContext('2d');

//atribuimos propriedades e metodos ao nosso objeto
//posiçoes(X, Y, Width, height)
c.fillStyle = "red";
c.fillRect(100,80,150,200);
c.fillStyle = "rgba(0,255,0,0.5)";
c.fillRect(200,100,500,100);
c.fillRect(100,400,350,100);

//desenhando uma linha
//inicia o desenho
c.beginPath();
//posição inicio da linha
c.moveTo(50,450);
c.lineTo(700,50);
c.lineTo(500,300);
c.lineTo(700,300);
c.strokeStyle = "red";
c.stroke();
c.closePath();

//criando um circulo
//posições para criação(X, Y, raio, anguloInicial, anguloFinal)
c.beginPath();
c.arc(400, 450,100, 0, Math.PI * 2);
c.fillStyle = "rgba(0,0,255,0.5)";
c.stroke();
c.fill();
c.closePath();


//criar um for para criar vários circulos randomicos
/*
    for(var i=0; i > 10; i++)
    {
        c.beginPath();
        c.arc(400, 450,100, 0, Math.PI * 2);
        c.fillStyle = "rgba(0,0,255,0.5)";
        c.stroke();
        c.fill();
        c.closePath(); 
    }
*/


//criar um for para criar vários circulos randomicos
/*
    for(var i=0; i > 10; i++)
    {
        Deixa as posições randomicas
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        c.beginPath();
        deixa o raio randomico
        c.arc(x, y, Math.random() * 100, 0, Math.PI * 2);
        c.fillStyle = "rgba(0,0,255,0.5)";
        c.stroke();
        c.fill();
        c.closePath(); 
    }
*/

