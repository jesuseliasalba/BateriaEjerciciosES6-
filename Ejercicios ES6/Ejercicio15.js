//* Crea una función llamada swap que reciba un array y dos parametros que sean 
//* indices del array. La función deberá intercambiar la posición de los valores de 
//* los indices que hayamos enviado como parametro. Retorna el array resultante.

//* Sugerencia de array:

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array,par1,par2){
    const aux = array[par1];
    array[par1] = array[par2];
    array[par2] = aux;

    return array;
}

console.log(swap(fantasticFour,0,3))