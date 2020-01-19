const data = [ 
    { name: 'Rodrigo BJ', age: 29, city: 'São paulo' },
    { name: 'Rodrigo Jean', age: 28, city: 'Minas Gerais' }
  ]


//Procurando no find
const findName = pessoa => pessoa.name === 'Rodrigo BJ'

//Retorna um objeto tb
const bj = data.find(findName)
console.log(bj)

//Retornando index
const bjIndex = data.findIndex(findName)
console.log(bjIndex)