/*
Vários exercicios

Criar uma função para gerar um numero aleatorio entre 1 a 100

1) Criar um array com valores pares
2) Criar um array com valores impares
3) Criar um array em ordem descrescente
4) Gerar 2 numeros randomicos e gerar os numeros entre eles ex: gerou 2 e depois 8, criar um array com [2,3,4,5,6,7,8]

 */

const random = () => parseInt((Math.random()*20).toFixed(0))
const rand = random();
let arrEven = []
let arrOdd = []
console.log(rand);

for (let index = 0; index <= rand; index ++) {
    (index %2 === 0) ? arrEven.push(index) : arrOdd.push(index);
}

console.log(arrEven);
console.log(arrOdd);

arrEven.sort((a,b) => a<b)
arrOdd.sort((a,b) => a<b)

console.log(arrEven);
console.log(arrOdd);


const random2 = () => parseInt((Math.random()*20).toFixed(0))
const rand2 = random2();
const rand3 = random2();

console.log(rand2)
console.log(rand3);


let myArr = [];

if(rand2 < rand3){
    for (let index = rand2; index <= rand3; index ++) {
        myArr.push(index)
        }
}else if(rand2 > rand3){
    for (let index = rand2; index >= rand3; index --) {
        myArr.push(index)
    }
} else {
    console.log('errrrrrouuuuu, tente novamente')
}

console.log(myArr)