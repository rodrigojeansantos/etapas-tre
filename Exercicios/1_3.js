const log = console.log

//Somar dos numeros usando for
let numbers = [1,2,3,4,5]

let n = 0;

numbers.forEach(element => {
    n += element
    return n
});

log(numbers)
log(n)


//Usando reduce sem for
let numbersR = [1,2,3,4,5,6,7];

let n2 = numbersR.reduce((a,b) => a+b)

log(numbersR)
log(n2)