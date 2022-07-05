let c = prompt(`¿Desea calcular su prestamo bancario? 
                Ingrese SI para continuar
                Ingrese NO para abandonar`)

if (c === "SI" || c === "si" ) {
    let a = " "
    let b = " "
    prestamo(a, b)
}
else if (c === "NO" || c === "no" ){
    alert (`Gracias por usar nuestro servicio.`)
}
else{
    alert (`Por favor ingrese una opcion valida`)
}

function prestamo (a,b) {
    a = Number(prompt("Elija la cantidad de dinero a pedir")) 
    b = Number(prompt("Elija la cantidad de cuotas"))
    
    if (a !== String && a > 0 && b !== String && b> 0) {
        while (a !== String && a > 0 && b !== String && b> 0) {
            switch (true) {
                case (b<=12):
                    cuota = (a*1.1)/b
                    alert(`Para un prestamo de $${a}, son ${b} cuotas de $${cuota}`)
                    break;
                case ((b>12) && (b <=24)):
                    cuota2 = (a*1.5)/b
                    alert(`Para un prestamo de ${a}, son ${b} cuotas de $${cuota2}`)
                    break;
                case ((b>24) && (b <=50)):
                    cuota3 = (a*2)/b
                    alert(`Para un prestamo de ${a}, son ${b} cuotas de $${cuota3}`)
                case (b>=51):
                    cuota4 = (a*2.5)/b
                    alert(`Para un prestamo de ${a}, son ${b} cuotas de $${cuota4}`)
                    break;
                default: 
                    cuota5 = (a*3)/b
                    alert(`Para un prestamo de ${a}, son ${b} cuotas de $${cuota5}`)
                break
            }
        rePreg()
        break
    }
    } 
    else {
        alert (`            *Error 404*. 
            Por favor ingrese una cantidad valida.`) 
            rePreg() 
    }
}
function rePreg (x){
    x = prompt(`Desea calcular otro prestamo? 
                Ingrese SI para continuar
                Ingrese NO para abandonar`)
    if(x === "SI" || x === "si"){
        prestamo()
    }
    else {
        alert (`Gracias por usar nuestro servicio.`)
        
    }
}