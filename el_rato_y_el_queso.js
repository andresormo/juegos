

/**
 * direcciones:
 'u' -> arriba -> up
'd' -> abajo -> down
'l' -> izquierda -> left
'r' -> derecha -> right
 */
/**
 *  moverRaton(tablero,direccion) -> dada una dirección, cambia la posicion del raton
    getPosicionRaton(tablero) -> funcion que devuelva la posición actual del ratón @param tablero
    return posicion: array de los elementos
    getPosicionQueso(tablero) -> funcion que devuelva la posición del queso
    finJuego(tableroInicial, tableroFinal) -> si la posicion del raton coincide con la posición del queso

 */

const tableroInicial = [
    ['q', '', ''],
    ['', '', ''],
    ['', '', 'r']
]
const tableroJuego = [
    ['q', '', ''],
    ['', '', ''],
    ['', '', 'r']
]
const tableroFinal = [
    ['r', '', ''],
    ['', '', ''],
    ['', '', '']
]
function getPosicion(tablero, objetoDeBusqueda) {
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            if (tablero[i][j] === objetoDeBusqueda) {
                return [i, j]
            }
        }
    }
}

function getPosicionRaton(tablero) {
    return getPosicion(tablero, 'r')
}
function getPosicionQueso(tablero) {
    return getPosicion(tablero, 'q')
}

console.log(getPosicionRaton(tableroFinal));
console.log(getPosicionQueso(tableroInicial));

function esFinJuego(tableroInicial, tableroFinal) {
    let posicionQueso = getPosicionQueso(tableroInicial)
    let posicionRaton = getPosicionRaton(tableroFinal)
    if (posicionQueso[0] === posicionRaton[0] && posicionQueso[1] === posicionRaton[1]) {
        return true
    } return false
}

console.log(esFinJuego(tableroInicial, tableroFinal));



function mover(direccion) {
    let posicionRaton = getPosicionRaton(tableroJuego)

    if (direccion === 'u' && posicionRaton[0] > 0) {
        tableroJuego[posicionRaton[0]][posicionRaton[1]] = ''
        posicionRaton[0] = posicionRaton[0] - 1
        tableroJuego[posicionRaton[0]][posicionRaton[1]] = 'r'
        return tableroJuego
    }
    else if (direccion === 'd' && posicionRaton[0] < 2) {
        tableroJuego[posicionRaton[0]][posicionRaton[1]] = ''
        posicionRaton[0] = posicionRaton[0] + 1
        tableroJuego[posicionRaton[0]][posicionRaton[1]] = 'r'
        return tableroJuego
    }
    else if (direccion === 'r' && posicionRaton[1] < 2) {
        tableroJuego[posicionRaton[0]][posicionRaton[1]] = ''
        posicionRaton[1] = posicionRaton[1] + 1
        tableroJuego[posicionRaton[0]][posicionRaton[1]] = 'r'
        return tableroJuego
    }
    else if (direccion === 'l' && posicionRaton[1] > 0) {
        tableroJuego[posicionRaton[0]][posicionRaton[1]] = ''
        posicionRaton[1] = posicionRaton[1] - 1
        tableroJuego[posicionRaton[0]][posicionRaton[1]] = 'r'
        return tableroJuego

    } return 'Movimiento invalido'
}
let puntuacionDeJuego = 14
function partidaRapida(tablero) {
    if (!esFinJuego(tableroInicial, tablero)) {
        puntuacionDeJuego -= 1
        return 'Sigue la partida'
    }
    else if (esFinJuego(tableroInicial,tablero)) {
        puntuacionDeJuego -= 1
        if(puntuacionDeJuego === 10){
            return `Eres un maestro, puntuacion final: ${puntuacionDeJuego}`
        }
        else if(puntuacionDeJuego <10 && puntuacionDeJuego>6){
            return `Buena partida, puntuacion final: ${puntuacionDeJuego}`
        }
        else if(puntuacionDeJuego<7 && puntuacionDeJuego>3){
            return `Tienes que practicar más, , puntuacion final: ${puntuacionDeJuego}`
        }
        else{ return `Eres un paquete, puntuacion final: ${puntuacionDeJuego} `}
    }
}

console.log(mover('u'));
console.log(partidaRapida(tableroJuego));
console.log(mover('u'));
console.log(partidaRapida(tableroJuego));
console.log(mover('l'));
console.log(partidaRapida(tableroJuego));
console.log(mover('r'));
console.log(partidaRapida(tableroJuego));
console.log(mover('d'));
console.log(partidaRapida(tableroJuego));
console.log(mover('d'));
console.log(partidaRapida(tableroJuego));
console.log(mover('u'));
console.log(partidaRapida(tableroJuego));
console.log(mover('u'));
console.log(partidaRapida(tableroJuego));
console.log(mover('l'));
console.log(partidaRapida(tableroJuego));
console.log(mover('r'));
console.log(partidaRapida(tableroJuego));
console.log(mover('l'));
console.log(partidaRapida(tableroJuego));
console.log(mover('l'));
console.log(partidaRapida(tableroJuego));












