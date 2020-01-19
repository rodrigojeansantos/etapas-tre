/*
    1 Crie uma função que gera um numero aleatorio entre 1 e 1000.

    2 Crie outra função que tem que chutar valores até acertar qual valor foi informado na função acima.
    Todo numero errado deve ser armazenado em um array.

    3 Depois que o numero for encontrado criar outro item com a soma dos pares e impares dos valores chutados

    4 Depois subtrair os Pares dos Impares
    exemplo abaixo

    {
        valorADescobrir: 98,
        valoresChutados:[10,1,3,87,13, 98],
        somaDePares: 108,
        somaDeImpares: 103,
        subtrair: 108 - 103 = 5
    }

    5 Porem se o valor do subtrair for negativo você precisa apagar os valores pares do 
    valoresChutados e refazer os chutes somente colocando valores pares.
    Você precisa fazer isso até sua função de par retornar um valor positivo no item subtrair.
*/

//1
const random = () => parseInt((Math.random()*20).toFixed(0))

const acerto = random();

//2
let random2 = parseInt((Math.random()*20).toFixed(0))

let erros = [];

while(acerto !== random2){

        random2 = parseInt((Math.random()*20).toFixed(0))
        erros.push(random2)
}

erros.pop()

console.log(acerto)
console.log(erros.length)

//3
let odd = new Array(1);
let even = new Array(1);

erros.map((el)=>(el % 2 === 0? even.push(el): odd.push(el))) // perfeito.


const somaOdd = odd.reduce((a,b)=>(a+b))
const somaEven = even.reduce((a,b)=>(a+b))

//console.log(somaEven,somaOdd)

//4

let subtrair = Math.abs(somaEven - somaOdd);

// console.log(subtrair)

//5  Porem se o valor do subtrair for negativo você precisa apagar os valores pares do 
//valoresChutados e refazer os chutes somente colocando valores pares.
//Você precisa fazer isso até sua função de par retornar um valor positivo no item subtrair.

const tamanhoEven = even.length;
// console.log(tamanhoEven)

let newEvenError = [];
let evenLength = newEvenError.length 
let random3;

while(subtrair < 0){
    console.log(subtrair)
    console.log(evenLength !== tamanhoEven)

    while(evenLength !== tamanhoEven){

        random3 = parseInt((Math.random()*20).toFixed(0))
        random3 % 2 === 0? newEvenError.push(random3): null
    }
    let newSomaEven = newEvenError.reduce((a,b)=>(a+b))
    subtrair = newSomaEven - somaOdd
}

console.log(subtrair)


