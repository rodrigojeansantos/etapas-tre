const log = console.log

// Somar todos os intervalos entre um numero
// exe: sumAll([4,1])
//      resp = 10

// Solução simples, pode usar for

const arrNum = [4,1]
const copiaNum = arrNum;
const num1 = copiaNum.shift();
const num2 = copiaNum.pop();
let copiaNum2 = [];
let copiaNum3 = [];
let sum = 0;
let sum2 = 0;
let mensagem = 'erro, numero igual';

/*
if(num1 < num2){
  for (let index = num1; index <= num2; index++) {
    copiaNum2.push(index);
  }
  for (let i = 0; i < copiaNum2.length; i++) {
    sum = sum + copiaNum2[i];
  }
}else if(num1 > num2){
  for (let index = num1; index >= num2; index--) {
    copiaNum3.push(index);
  }
  for (let i = 0; i < copiaNum3.length; i++) {
    sum2 = sum2 + copiaNum3[i];
  }
}else{mensagem}


*/

  // Solução elegante
  /*const reducer = ((a,b) => a+b)

  if(num1 < num2){
    for (let index = num1; index <= num2; index++) {
      copiaNum2.push(index);
    }
    sum = copiaNum2.reduce(reducer);
  }else if(num1 > num2){ 
    for (let index = num1; index >= num2; index--) {
      copiaNum3.push(index);
    }
    sum2 = copiaNum3.reduce(reducer);
  }else{mensagem}

log(sum)
log(sum2)
log(mensagem)*/


log((Math.abs(num1-num2)+1)*((num1+num2)/2));

