/**
 * Buscando a Nemo
 */

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

function buscarPez(banco_peces, pezBuscado) {
    let pezEncontrado = false 
    let indicePez = 0 

    
    while(!pezEncontrado && indicePez<banco_peces.length){
        
        pezEncontrado = (banco_peces[indicePez].nombre == pezBuscado )
        indicePez++ 
    }

    return pezEncontrado;
}

console.log("Buscar a Tenacitas:", buscarPez(banco_peces, "Tenacitas"))
