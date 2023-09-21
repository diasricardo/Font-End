const visor = document.querySelector("#visor");

//adicionando um ouvinte ao keydown
document.addEventListener("keydown", (event) => {
    if(event.key === "a" || event.key === "A")
    {
        visor.textContent = "Atalho A pressionado!";
        visor.style.backgroundColor = "green";
        event.preventDefault();//evita ação de navegar para tras, 
    }
    else if(event.key === "d" || event.key === "D")
    {
        visor.textContent = "Atalho D pressionado!";
        visor.style.backgroundColor = "red";
        event.preventDefault();//evita ação de navegar para tras, 
    }
    else if(event.key == "c" || event.key === "C")
    {
        visor.textContent = "Pressione A, D ou C";
        visor.style.backgroundColor = "";
        event.preventDefault();
    }
})