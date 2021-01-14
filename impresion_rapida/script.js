
const btn_printing = document.querySelector(".btn_printing");
btn_printing.addEventListener("click", ocultar)

function ocultar(){
    btn_printing.classList.add("no-display")
    imprimir()
}

function imprimir(){
    window.print()
}