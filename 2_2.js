const log = console.log

const addOne = (a) => a + 5;
log(addOne(10)); // 15

// Eles são iguais

const addTwo = a => a + 5;
log(addTwo(10)); // 15

/* Resp.: São iguais. Os parênteses que envolvem o parâmetro da arrow function armazenada 
          na constante addOne só faria sentido no caso de mais de 1 parâmetro. 
*/