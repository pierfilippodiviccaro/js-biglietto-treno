const kilometri = prompt("inserisci il kilometraggio")
let soldi =  Math.floor( 0.21 * parseFloat(kilometri) );
let eta = prompt("inserisci la tua eta!")

if (eta <= 17){
  const sconto = Math.floor((soldi*20)/100);
  console.log(`il costo totale del tuo biglietto è: ${sconto}€`);
}
else if (eta >= 65) {
    const scontoOver = Math.floor((soldi*40)/100);
    console.log(`il costo del biglietto è di ${scontoOver}€`)
}
else{
    console.log(`il costo del biglietto è ${soldi}€`)
}


