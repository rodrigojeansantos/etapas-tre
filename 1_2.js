const log = console.log

/* Using normal for loop: */
function isOdd(n) {
    return n %2;
 }
 let numbers = [1,2,3,4,5];
 let odd = [];
 for(let i=0, total = numbers.length; i< total ; i= i +1) {
    let number = numbers[i];
    if( isOdd(number) ) {
       odd.push(number);
    }
 }
log(odd)

 /* Using filter */
 let numbersF = [1,2,3,4,5, 6, 7]
let oddF = numbersF.filter(n => n%2); 
log(oddF)