/* Criar um novo array os números ímpares */

const log = console.log

/* Usando  for loop: */
 let numbers = [1,2,3,4,5];
 const numbersImpares = new Array()

 numbers.forEach(element => {
   if(element % 2 !== 0) {
     numbersImpares.push(element)
   }
 })
 log('numbers = ', numbers, '\n', 'numbersImpares = ', numbersImpares)

 /* Usando filter */
 let numbersF = [1,2,3,4,5, 6, 7]

numbersFimpares = new Array()

numbersFimpares = numbersF.filter(numero => numero % 2 !== 0)

log('numbersF = ', numbersF, '\n', 'numberFimpares = ', numbersFimpares)