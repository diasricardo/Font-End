//declarar uma variavel que recebera o elemento video
var video = document.querySelector('video');

//acessar meu device de video atraves do meu navegador
//isso retorna uma promisse, algo que depende do processamento do pc para processar
navigator.mediaDevices.getUserMedia({video:true})
//quando der certo o acesso ao video
.then(stream => {
    video.srcObject = stream;
    video.play();
})
//quando nao der certo
.catch(error =>{
    console.log(error);
})

document.querySelector("button").addEventListener('click',() =>{
    var canvas = document.querySelector('canvas');
    //determina o tamanho da div canvas
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;    

        var context = canvas.getContext("2d");
    
        //pega o frame do meu video e coloca na canvas
        //desenha o meu video na minha canvas
        context.drawImage(video,0, 0);
    
        //
        downloadLink.href = canvas.toDataURL();
        downloadLink.style.display = 'block';
})