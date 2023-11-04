///Exercise #3 (sugerencia reduce() )
//Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
//Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
const array = [2, 4, 6, 8]; // arreglo
const sum = array.reduce((acumulador, valorActual) => acumulador + valorActual); // el método reduce se utiliza para calcular la suma 
const product = array.reduce((acumulador, valorActual) => acumulador * valorActual); // acumulador contendra la suma de todos los lementos
console.log( sum);
console.log( product);