// Añadiendo fecha al ticket
const ticket_date = document.querySelector(".ticket_date");

let fecha = (new Date()).toLocaleDateString()
console.log(fecha)

ticket_date.innerHTML=(`${fecha}`)

//Añadiendo productos al tiket
const btn_añadir = document.getElementById("btn_añadir");
btn_añadir.addEventListener("click", añadir_producto)
const buying_wrapper = document.querySelector(".buying_wrapper")
const product_input = document.getElementById("product_input")
const product_price_input = document.getElementById("product_price_input")
const product_quantity_input = document.getElementById("product_quantity_input")
const total_compra = document.getElementById("total_compra")


/*


<div class="ticket_product_component"><!--Componente-->
    <div class="cantidad_container">
        2.00
    </div>

    <div class="producto_container">
        Producto 1, Descripción
    </div>

    <div class="precio_container">
        $52
    </div>
</div>

*/
let cuenta_num = 1;
let total = 0;

function añadir_producto(){

    let product_name = product_input.value;
    let product_price = parseFloat(product_price_input.value);
    let product_quantity = product_quantity_input.value;



    let product_component = `
    <div class="cantidad_container">
        ${product_quantity}
    </div>

    <div class="producto_container">
        ${product_name}
    </div>

    <div class="precio_container">
        $${product_price}
    </div>
`
  

    
    let ticket_product_component =  document.createElement("div")
    ticket_product_component.classList.add("ticket_product_component")
    ticket_product_component.classList.add(`cuenta_${cuenta_num}`)
    ticket_product_component.innerHTML = (product_component)

    let before = (`cuenta_${cuenta_num}`);
    let element = document.querySelector(`.${before}`)
    buying_wrapper.insertBefore(ticket_product_component, element)
    

    console.log(ticket_product_component)
    
    cuenta_num +=1;

    
    if (product_price === 123){
        console.log("Es número")
    } else if (product_price ==="123") {
        console.log("Es String")
    }
    
    total = total + product_price;
    total_compra.innerHTML=`$${total}`
    

    product_input.value = ("")
    product_price_input.value =("")
    product_quantity_input.value=("")
}

//IMPRIMIENDO

const btn_print = document.getElementById("btn_print")
btn_print.addEventListener("click", imprimir_ticket)

const ticket_impresion = document.querySelector(".ticket_wrapper")
function imprimir_ticket(){    
    window.print()  
    console.log("Hola mundo")
}



