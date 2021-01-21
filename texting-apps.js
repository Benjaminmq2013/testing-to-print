const print_container = document.querySelector(".print_container");
const find_container = document.querySelector(".find_container")

print_container.addEventListener("click", open_printing)
function open_printing(){
    window.open("./testing-to-print/index.html", "_self")
}

find_container.addEventListener("click", open_finding)

function open_finding (){
    window.open("./testing-to-find/index.html", "_self")
}