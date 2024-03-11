let cantidadPartidas = parseInt(prompt("Inrgesa cantidad de partidas: "));

let empataste = 0;
let perdiste = 0;
let ganaste = 0;

for (let i = 0; i < cantidadPartidas; i++) {
    let opcionJugador = parseInt(prompt('Ingresa tu jugada piedra: 0, papel: 1, tijera: 2: '));
    let opcionBot = Math.floor(Math.random() * 3);

    // Piedra = 0
    // Papel = 1
    // Tijera = 2

    if (opcionJugador === 0) {
        if (opcionBot === 0) {
            document.write('Jugador: Piedra Bot: Piedra -> Empate<br>');
            empataste++;
        }
        else if (opcionBot === 1) {
            document.write('Perdiste<br>');
            perdiste++;
        }
        else {
            document.write('Ganaste<br>');
            ganaste++;
        }
    }

    else if (opcionJugador === 1) {
        if (opcionBot === 0) {
            document.write('Ganaste<br>');
            ganaste++;
        }
        else if (opcionBot === 1) {
            document.write('Empate<br>');
            empataste++;
        }
        else {
            document.write('Perdiste<br>');
            perdiste++;
        }
    }

    else {
        if (opcionBot === 0) {
            document.write('Perdiste<br>');
            perdiste++;
        }
        else if (opcionBot === 1) {
            document.write('Ganaste<br>');
            ganaste++;
        }
        else {
            document.write('Empate<br>');
            empataste++;
        }
    }
}

document.write('<h3>Resumen:</h3>')
document.write(`'Ganaste ${ganaste}<br>`);
document.write(`Empataste: ${empataste}<br>`);
document.write(`Perdiste: ${perdiste}<br>`);