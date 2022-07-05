function prestamo (a,b) {
    if (b<12) {
        cuota = (a*1.1)/b
        console.log(`Para un prestamo de ${a}, son ${b} cuotas de $${cuota}`)
    }
    else if (b>12 && b <=24) {
        cuota2 = (a*1.5)/b
        console.log(`Para un prestamo de ${a}, son ${b} cuotas de $${cuota2}`)
    } 
    else {
        cuota3 = (a*2)/b
        console.log(`Para un prestamo de ${a}, son ${b} cuotas de $${cuota3}`)
    }
}

let a = Number(prompt("Elija la cantidad de dinero a pedir")) 
let b = Number(prompt("Elija la cantidad de cuotas")) 

if (a !== String && a > 0 && b !== String && b> 0){(  
    prestamo(a, b)
)}
else{
    alert (`            *Error 404*. 
            Por favor ingrese una cantidad valida.`)
}



