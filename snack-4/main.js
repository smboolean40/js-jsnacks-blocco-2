// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione dispari
// 1. creo l'array
var numeri = [10, 2, 3, 1, 5, 6];
var somma = 0;
// 2. attraverso l'array
for ( var i = 0; i < numeri.length; i++ ) {
	// 3. controllo se l'indice è dispari
	if ( i % 2 == 1 ) {
		somma = somma + numeri[i];
		// somma += numeri[i]
	}
}
// 4. stampo la somma
console.log(somma);