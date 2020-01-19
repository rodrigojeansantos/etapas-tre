/*
Vários exercicios

Criar uma função para gerar um numero aleatorio entre 1 a 100

1) Criar um array com valores pares
2) Criar um array com valores impares
3) Criar um array em ordem descrescente
4) Gerar 2 numeros randomicos e gerar os numeros entre eles ex: gerou 2 e depois 8, criar um array com [2,3,4,5,6,7,8]

 */

const log = console.log

 // Função do exercício 1
const nRandom = () => parseInt((Math.random() * (100 - 1) + 1).toFixed(0))

// Funções do exercício 2
const parOuImpar = num => num % 2 === 0 ? adicionaNum(pares, num) : adicionaNum(impares, num)

const adicionaNum = (arr, num) => arr.push(num) 

const alimentaArrays = (num) => {

  for(let i=0, valor=0; i < num; i++) {
  
    valor = nRandom()
    parOuImpar(valor)
  }
}

// Funções do exercício 4
const criaArrayComIntervalo = (num1, num2, arr) => {
  
  let index = ordenaArray([num1, num2])
  let intervalo = index[0]

  console.log(index[0], index[1])

  for(let i=0; i <= index[1] - index[0]; i++) {
    arr.push(intervalo)
    intervalo++
  }
}

const ordenaArray = (arr) => arr.sort( (a, b) => a - b )


// 1
let num = nRandom()
log('\nEx1) O número aleatório criado é: ', num)

// 2
const pares = new Array()
const impares = new Array()
alimentaArrays(num)
log(`Ex2) Array de pares: [${pares}]`, '\n', `Ex2) Array de ímpares: [${impares}]`, '\n')

// 3
const arrDecrescente = [].concat(...pares, ...impares).sort( (a, b) => b - a )
log(`Ex3) Array decrescente: [${arrDecrescente}]`, '\n')

// 4
const num1 = nRandom()
const num2 = nRandom()
log(`Ex4) Primeiro número aleatório: ${num1}`, '\n', `Ex4) Segundo número aleatório: ${num2}`, '\n')

const arr4 = new Array()

console.log(arr4)
criaArrayComIntervalo(num1, num2, arr4)
log(`Array com intervalo entre ${num1} e ${num2}:`, arr4)