// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// // 0. inizializzo la variabile che conterrà la somma
// var somma = 0;
// // 1. ciclo per 5 volte
// for (var i = 1; i <= 5; i++) {
// 	// 2. chiedo il numero all'utente
// 	var numero = parseInt(prompt("inserisci un numero"));
// 	// 2a valido l'input dell'utente
// 	while ( isNaN(numero) ) {
// 		numero = parseInt(prompt("Attento! devi inserire un numero!!"));
// 	}
// 	// 3. sommo il numero alla somma precedente
// 	somma += numero; // somma = somma + numero
// }
// // 4. stampo la somma
// console.log(somma);


// ---------- WHILE ----------

// 0. inizializzo la variabile che conterrà la somma
var somma = 0;
var i = 1;
// 1. ciclo per 5 volte
while (i <= 5) {
	// 2. chiedo il numero all'utente
	var numero = parseInt(prompt("inserisci un numero"));
	// 2a valido l'input dell'utente
	while ( isNaN(numero) ) {
		numero = parseInt(prompt("Attento! devi inserire un numero!!"));
	}
	// 3. sommo il numero alla somma precedente
	somma += numero; // somma = somma + numero
	i++;
}
// 4. stampo la somma
console.log(somma);