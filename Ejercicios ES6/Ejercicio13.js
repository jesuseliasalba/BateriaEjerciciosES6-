//* Usando la función anterior beneficiate de poder conocer el indice del array 
//* para crear una función llamada removeItem que pasandole un array y un texto 
//* como parametros (los mismos parametros que en el anterior ejercicio) llame a 
//* la función anteriormente creada findArrayIndex y obten el indice para 
//* posteriormente usar la función de javascript .splice() para eliminar el 
//* elemento del array.

//* Finalmente retorna el array.
 
//* De nuevo haz varios ejemplos para practicar y comprueba que funcionan 
//* correctamente.

function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
            return i;
        }
    }
}

function removeItem(array,text) {
    array.splice(findArrayIndex(array,text), 1)
}

//* Ej array:
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

removeItem(mainCharacters,"Anakin")

console.log(mainCharacters);