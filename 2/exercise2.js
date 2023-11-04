//ejercicio 2
//Write a function that:
//•	Takes in an array of numbers.
//•	Doubles the value of each number in the array.
//•	Prints out the new updated array.

const numbers = [3, 6, 9, 12, 15]; //Defines el arreglo
const doubles = numbers.map(function (x) {// nuevo arreglo igualado al anterior, cada elemento se multiplica por dos
  return x * 2;
  
}) 
  console.log(doubles);
