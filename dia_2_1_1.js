/* 
    Criar uma função que junta os dados como abaixo 
    mergeWords('Aqui')('não')('existe')('paz.')

    O resultado deve ser
    'There is no spoon.'
*/

// Solução
const mergeWords2 = string => nextString => nextString === undefined ? string : mergeWords2(`${string} ${nextString}`);
console.log(mergeWords2('There')('is')('no')('spoon.')());
