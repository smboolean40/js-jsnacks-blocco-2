// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

// 0. creo le liste di nomi e cognomi
var nomi = ["Mario", "Gigi", "Francesco"];
var cognomi = ["Rossi", "Verdi", "Bianchi"];
var invitati = [];
// 1. per 3 volte
for (var i = 1; i <= 3; i++) {
	// 2. genero un numero random per il nome e per il cognome
	var indiceRandomNome = Math.floor(Math.random() * nomi.length); // 0 - 2
	var indiceRandomCognome = Math.floor(Math.random() * cognomi.length); // 0 - 2
	// 3. aggiungo il nome alla lista
	var nomeCompleto = nomi[indiceRandomNome] + " " + cognomi[indiceRandomCognome];
	invitati.push(nomeCompleto);
}
// 4. stampo la lista
console.log(invitati);