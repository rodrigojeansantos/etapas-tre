// reduce
const str = ['a', 'b', 'c']

const concatena = str.reduce( (alfabeto, char) => {
    console.log(alfabeto, char)
    return alfabeto + char
}, '')

console.log(concatena)

// filter
const age = [18, 21, 27, 34]

const pesquisa = age.filter(idade => idade === 34 ? idade : 'Idade não encontrada!')

console.log(pesquisa)