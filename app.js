// defino 3 arrays vacios a los cuales el ususario luego decide a cual enviar cada producto

const gaseosasArray = []
const comidasArray = []
const caramelosArray = []

let decision = " "
let nombre = " "
let precio = 1

class Producto{
    constructor(nombre, precio){
    this.nombre = nombre,
    this.precio = precio}
}

function ingresoDatos(nombre, precio){

    // tengo 3 arrays por lo cual de alguna forma el usuario tiene que elegir a que va cada cosa
    decision = prompt(`Ingrese el numero correspondiente a la categoria del producto a cargar
                         1 - Gaseosas
                         2 - Comida
                         3 - Caramelos`)
   
    switch(decision){
        case "1": 
             ciclo()                                              // ejecuto funcion de ciclo for
        break;
        case "2":
             ciclo()                                              // ejecuto funcion de ciclo for
        break;
        case "3":
             ciclo()                                              // ejecuto funcion de ciclo for
            break;
        default:
             alert("No ingresaste una categoria valida")
        break;
    }                     
    rePreg()                                                      // funcion de re pregunta para saber si el usuario quiere cargar mas 
}

function ciclo(){                                                // funcion de ciclo para que pregunte x veces ingrese valor y precio
                     
    let cantidad = Number(prompt("¿Cuantos productos queres ingresar? Maximo 10 por vez"))
    if (cantidad <= 10) {
        for(i = 1; i <= cantidad; i++){
            nombre = prompt("Ingrese el nombre del producto")
            precio = Number(prompt("Ingrese el valor del producto"))
            cargaArray()  
            }
    } 
    else {
        alert("Ingrese una cantidad entre 1 y 10")
    }
    
}
function rePreg(){                                          // funcion para re preg si quiere ingresar mas 
    let x = prompt(`¿Desea ingresar mas productos? 
                    Ingrese SI para continuar
                    Ingrese NO para abandonar`)
        if(x === "SI" || x === "si"){                       // responde si vuelve a ejecutar la funcion de 
        ingresoDatos()
        }
        else {                                              // respone no - termina todo   
                alert (`Gracias por usar nuestro servicio.`)
            }
}

function cargaHtml(){
    document.write(`Producto cargado correctamente. Nombre: ${nombre}, Precio: ${precio} <br>`)  // escribe en el html 
}

function cargaArray (){                                     // funcion que en base al valor de decision, crea un producto y lo guarda en un array
    
switch (true) {
    case decision === "1":
        productoGaseosa = new Producto(nombre, precio)
        gaseosasArray.push(productoGaseosa)
        cargaHtml()
        break;
    case decision === "2":
        productoComida = new Producto(nombre, precio)
        comidasArray.push(productoComida)
        cargaHtml()
        break;
    default:
        productoCaramelo = new Producto(nombre, precio)
        caramelosArray.push(productoCaramelo)
        cargaHtml()
        break;
}
}

ingresoDatos()
console.log(gaseosasArray);
console.log(comidasArray);
console.log(caramelosArray);
