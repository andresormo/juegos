
function obtenerRandomEntre(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}



function crearTablero(numeroFilas, numeroColumnas, caracterDeRelleno) {
    const tablero = []
    for (i = 0; i < numeroFilas; i++) {
        const filas = []
        for (let j = 0; j < numeroColumnas; j++) {
            filas.push(caracterDeRelleno)
        } tablero.push(filas)
    } return tablero
}


function mostrarTablero(tablero) {
    for (let i = 0; i < tablero.length; i++) {
        console.log(tablero[i]);
    }
    console.log("");
}

function rellenarPosicion(tablero, posicion, caracter) {
    tablero[posicion.x][posicion.y] = caracter
    return tablero


}

function colocarBarcoAleatorio(tablero) {
    let posicionX = obtenerRandomEntre(0, tablero.length - 1)
    let posicionY = obtenerRandomEntre(0, tablero[0].length - 1)
    let posicion = {x: posicionX, y: posicionY}
   if(encontrarCaracterEnPosicion(tablero, posicion) !== 'B'){
    rellenarPosicion(tablero, posicion, 'B')
   }
    else{
        colocarBarcoAleatorio(tablero)
    }
   
}


function generarMuchosBarco(tablero, numberBarcos) {
    for (let i = 0; i < numberBarcos; i++) {
        colocarBarcoAleatorio(tablero)
    }
}

function disparar(tablero, posicionDisparo) {
    if (encontrarCaracterEnPosicion(tablero, posicionDisparo) === 'B') {
        rellenarPosicion(tablero, posicionDisparo, 'X')
        return true
    }
    return false
}

function encontrarCaracterEnPosicion(tablero, posicion) {
    return tablero[posicion.x][posicion.y]
}

const tableroPrincipal = crearTablero(3, 3, '*')
mostrarTablero(tableroPrincipal)
generarMuchosBarco(tableroPrincipal, 4)
// rellenarPosicion(tableroPrincipal,{x:1,y:1},'R')
// colocarBarcoAleatorio(tableroPrincipal)
console.log(disparar(tableroPrincipal, { x: 0, y: 2 }));
mostrarTablero(tableroPrincipal);

