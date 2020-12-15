let pez1 = {
    nombre: "Dory",
    color: 'azul'

}

let pez2 = {
    nombre: "Nemo",
    color: 'naranja'
}

let pez3 = {
    nombre: "Sipho",
    color: 'negro'
}


let pez4 = {
    nombre: "Burbujitas",
    color: 'negro'
}

let banco_peces = [pez1, pez2, pez3, pez4]

// function buscarPez(banco_peces, pezBuscado) {
//     let pezBuscado = false
//     let indicePez = 0

//         while(!pezBuscado && indicePez < banco_peces.length) {
//             pezBuscado = (banco_peces[indicePez].nombre == pezBuscado)
//             indicePez++
//         }
//     return pezBuscado
// }
function buscarPez(banco_peces, pezBuscado) {
    let pezEncontrado = false // Hemos encontrado ya el pez?
    let indicePez = 0 // Primera posición del array

    
    while(!pezEncontrado && indicePez<banco_peces.length){
        
        pezEncontrado = (banco_peces[indicePez].nombre == pezBuscado )
        indicePez++ // nos permite avanzar en el array; poder comprobar todas las posiciones
    }

    return pezEncontrado;
}

console.log(BuscarPez(banco_peces, 'Nemo'))