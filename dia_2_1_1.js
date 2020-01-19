/* 
    Criar uma função que junta os dados como abaixo 
    mergeWords('Aqui')('não')('existe')('paz.')

    O resultado deve ser
    'Aqui não existe paz.'
*/

// Solução
const log = console.log
const juntaStr = (...params) => params.join(' ')

log(juntaStr('Aqui', 'não', 'existe', 'paz'))