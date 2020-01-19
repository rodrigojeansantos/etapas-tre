/* 
    Criar uma função que junta os dados como abaixo 
    mergeWords('Aqui')('não')('existe')('paz.')

    O resultado deve ser
    'Aqui não existe paz.'
*/

// Solução

let string;

const concatenador = (...parameter) => parameter.join(' ')

console.log(('Aqui')+" "+('não')+" "+('existe')+" "+('paz.'))

console.log(concatenador('aqui','não','existe','paz'))



