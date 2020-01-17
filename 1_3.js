const log = console.log

//Somar dos numeros usando for
let numbers = [1,2,3,4,5]
let somaNumbers = 0

numbers.forEach(number => somaNumbers += number)
log('numbers = ', numbers, '\n', 'somaNumbers = ', somaNumbers)

//Usando reduce sem for
let numbersR = [1,2,3,4,5,6,7];

const somaNumbersR = numbersR.reduce( (soma, numero) => soma += numero)
log('numbersR = ', numbersR, '\n', 'somaNumbersR = ', somaNumbersR)