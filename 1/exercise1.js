/*Exercise #1 (sugerencia: join())
Copy the code below into your workspace:
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  // your code here
}

printOutString();
Complete the function to print out the string: This is a sentence.
*/

const arr = ["This", "is", "a", "sentence."]; //Se declara el arreglo
function printOutString() {  //Defines una función
   console.log(arr.join(" ")); //utilizas el método  join  para concatenar los elementos del arreglo en una sola cadena
}

printOutString(); //llamas a la función











