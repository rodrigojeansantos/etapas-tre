const log = console.log

//Sum of numbers
let numbers = [1,2,3,4,5]
let result = 0;
for(let i=0, total = numbers.length; i< total ; i= i +1) {
   result = result + numbers[i];
}

log(result)

//Using reduce
let numbersR = [1,2,3,4,5,6,7];
function sum(accumulator, currentValue){
   return accumulator + currentValue;
}
let initialVal = 0;
let resultR = numbersR.reduce(sum, initialVal); 
// or
var resultRR = numbers.reduce((acc, val)=> acc+val, 0);

log(resultR)
log(resultRR)