// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

// 1. creo i due array
// var arr1 = [1, 2, 3, 4, 5];
// var arr2 = [10, 11];
var arr1 = [];
var arr2 = [];

var lunghezzaArray1 = Math.floor(Math.random() * 20) + 1;

for ( var i = 0; i < lunghezzaArray1; i++ ) {
	arr1.push( Math.floor(Math.random() * 100) + 1 );
}

var lunghezzaArray2 = Math.floor(Math.random() * 20) + 1;

for ( var i = 0; i < lunghezzaArray2; i++ ) {
	arr2.push( Math.floor(Math.random() * 100) + 1 );
}

console.log("array 1: ", arr1);
console.log("array 2: ", arr2);

// 2. controllo quale dei due array è più corto
// if ( arr1.length < arr2.length ) {

// 	while ( arr1.length < arr2.length ) {
// 		arr1.push(Math.floor(Math.random() * 100));
// 	}

// } else if ( arr2.length < arr1.length ) {

// 	while ( arr2.length < arr1.length ) {
// 		arr2.push(Math.floor(Math.random() * 100));
// 	}

// } else {
// 	alert("gli array hanno la stessa lunghezza!");
// }

if ( arr1.length == arr2.length ) {
	alert("gli array hanno la stessa lunghezza!");
} 

while ( arr1.length < arr2.length ) {
	arr1.push(Math.floor(Math.random() * 100));
}

while ( arr2.length < arr1.length ) {
	arr2.push(Math.floor(Math.random() * 100));
}

console.log("array 1: ", arr1);
console.log("array 2: ", arr2);