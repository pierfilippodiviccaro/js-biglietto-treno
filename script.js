

// dichiarazioni di variabili
const kilometri = prompt("inserisci il kilometraggio")
let soldi = 0.21 * parseInt(kilometri);
let eta = prompt("inserisci la tua eta!")
let sconto = 0;

// logica
if (eta <= 17){
  sconto = (soldi * 20 / 100)
} 
else if (eta >= 65) {
    sconto = (soldi * 40 / 100)
}
soldi = soldi - sconto

// output
console.log(`il costo totale del tuo biglietto è: ${soldi.toFixed(2)}€ con uno sconto di ${sconto.toFixed(2)}€`);

