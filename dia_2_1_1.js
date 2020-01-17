/* 
    Criar uma função que junta os dados como abaixo 
    mergeWords('Aqui')('não')('existe')('paz.')

    O resultado deve ser
    Aqui não existe paz
*/

// Solução
const mergeWords2 = string => nextString => nextString === undefined ? string : mergeWords2(`${string} ${nextString}`);
console.log(mergeWords2('Aqui')('não')('existe')('paz.')());