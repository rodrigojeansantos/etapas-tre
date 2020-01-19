//achar com numeros impares, 1 com for, outro com filter

const log = console.log

/* Usando  for loop: */
 let numbers = [1,2,3,4,5];

 let n = [];
 
 for (let index = 0; index < numbers.length; index++) {
    if(numbers[index] %2 !== 0){
        n.push(numbers[index])
    }   
 }

 log(numbers)
 log(n)


 /* Usando filter */
 let numbersF = [1,2,3,4,5, 6, 7]

let n2 = new Array();
n2 = numbersF.filter((element)=>{return element %2 !== 0});

log(numbersF);
log(n2);