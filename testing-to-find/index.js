//trayendo inputs para predicciones
const prediction_input = document.getElementById("prediction_input");
prediction_input.addEventListener("keyup", iterar_medicamentos)




//CONSTRUYENDO BASE DE DATOS LOCAL
var paracetamol = {
    nombre: 'Paracetamol',
    precio: 13.50    
}

var acetaminofen = {
    nombre: 'Acetaminofén',
    precio: 12.49
}

var amoxicilina = {
    nombre: 'Amoxicilina',
    precio: 5.87
}

var prednisona = {
    nombre: 'Prednisona',
    precio: 9.99
}

var escopolamina = {
    nombre: 'Escopolamina',
    precio: 7.67
}

var aspirina = {
    nombre: 'Aspirina',
    precio: 4.20
}

var omeprazol = {
    nombre: 'Omeprazol',
    precio: 5.99
}

//desde aquí
var cloranfenicol = {
    nombre: 'Cloranfenicol',
    precio: 9.99
}
var fluconazol = {
    nombre: 'Fluconazol',
    precio: 8.77
}
var clotrimazol = {
    nombre: 'Clotrimazol',
    precio: 4.76
}
var ketoconazol = {
    nombre: 'Ketoconazol',
    precio: 4.97
}
var ivermecticina = {
    nombre: 'Ivermecticina',
    precio: 2.97
}
var silicio = {
    nombre: 'Silicio',
    precio: 9.67
}
var calcio = {
    nombre: 'Calcio',
    precio: 6.79
}
var hierro = {
    nombre: 'Hierro',
    precio: 1.44
}
var zinc = {
    nombre: 'Zinc',
    precio: 50.99
}
var atorvastatina = {
    nombre: 'Atorvastatina',
    precio: 40.99
}

//Desde aquí, Parte II
var  abrasone = {
    nombre: 'Abrasone',
    precio: 80.29,
    descripcion: "Crema Rectal"
}
var ambroxol = {
    nombre: 'Ambroxol',
    precio: 80.29
}
var adofen = {
    nombre: 'Adofen',
    precio: 80.29
}
var adrenalina = {
    nombre: 'Adrenalina',
    precio: 80.29
}
var agomelatina = {
    nombre: 'Agomelatina',
    precio: 80.29
}
var agua = {
    nombre: 'Agua',
    precio: 1.00
}
var aminoven = {
    nombre: 'Aminoven',
    precio: 1.00
}
var anasma = {
    nombre: 'Anasma',
    precio: 1.00
}
var ateconol = {
    nombre: 'Ateconol',
    precio: 1.00
}
var atropina = {
    nombre: 'Atropina',
    precio: 1.00
}

var medicamentos = [
    paracetamol, acetaminofen, amoxicilina, prednisona, escopolamina, aspirina, omeprazol, cloranfenicol,
    fluconazol, clotrimazol, ketoconazol, ivermecticina, silicio, calcio, hierro, zinc, atorvastatina, abrasone,
    ambroxol, adofen, adrenalina, agomelatina, agua, aminoven, anasma, ateconol, atropina
]


const comienza_con = function (busqueda_value, medicamento_nombre){
    if (busqueda_value == ""){

    } else {
        return medicamento_nombre.toUpperCase().startsWith(busqueda_value.toUpperCase()) //Comparando input con medicamentos.nombre   
    }

}


//Se ejecuta al pulsar una tecla, actualiza el valor del input y lo compara con la base de datos.
function iterar_medicamentos(){
    let pred_num = 1;

    for (var l = 1; l < 4; l++){ //Limpiando resultados de la pulsación anterior. {loop}
    let prediction_number = document.querySelector(`.prediction_${l}`)
    prediction_number.innerHTML = ("")
    }

    for (var i = 0; i < medicamentos.length; i++){
        

        
        
        let contenido = (`${medicamentos[i].nombre} Precio: $${medicamentos[i].precio}`) //Nombre y Precio / Producto.
        let nombre_a_comparar = (medicamentos[i].nombre).toUpperCase()
        
        
        if (comienza_con( prediction_input.value, nombre_a_comparar)){            
            let prediction_number = document.querySelector(`.prediction_${pred_num++}`) //<li> para mostrar producto
            
            if (pred_num <= 4){
                prediction_number.innerHTML = contenido                
            }

        } 
            


    }


}


// Declarar el array externo
// for () {Ciclo para evaluar los 200 medicamentos y hacer push al array externo}
// Función para leet el lenght del array resultado y dibujar los 3 primeros en los <li>

