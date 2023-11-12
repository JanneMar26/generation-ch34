/*
Exercise #1 
(sugerencia: join())
Copy the code below into your workspace:
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  // your code here
}

printOutString();
Complete the function to print out the string: This is a sentence.
*/

/*Solución con el metodo join() en javaScript se utiliza para combinar todos los elementos de un arreglo en una sola cadena y devolver esa cadena como resultado. Este método toma un argurmento opcional que especifica el separador que se utilizará para unir los elemntos del arreglo. */

const array = ["This", "is", "a", "sentence."]; //Se declara el arreglo
function printOutString(array) {  //Defines una función
  return array.join(" ");  //utilizas el método  join  para combinar los elementos del arreglo en una sola cadena
}

console.log(printOutString(array)); //llamas a la función que unio a todos los elementos












