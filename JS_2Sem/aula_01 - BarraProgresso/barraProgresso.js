function animarBarraDeProgresso() {
    var progresso = 0;
    var barra = document.querySelector(".progress-bar");
    var barraProgresso = document.querySelector(".progress");

    function incrementarProgresso() {
        if (progresso <= 100) {
            progresso++;
            barra.style.width = progresso + "%";
            setTimeout(incrementarProgresso, 100);
        } else {
            barraProgresso.style.display = "none";
            document.body.style.backgroundImage = `url("https://images.pexels.com/photos/954599/pexels-photo-954599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`;
        }
    }

    incrementarProgresso();
}