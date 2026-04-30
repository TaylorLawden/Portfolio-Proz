const botao = document.getElementById("modoClaro/Escuro")

let claro = true;
botao.addEventListener("click", function() {
    if (claro) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        botao.textContent = "Modo Escuro";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        botao.textContent = "Modo Claro";
    }
    claro = !claro;
})