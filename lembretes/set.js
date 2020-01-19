// Objeto para guardar valores unicos de um tipo
let mySet = new Set(['Rodrigo', 'Jean', 'Santos'])

mySet.add('marcio')
mySet.add('marcio')
mySet.add('Jean') // De fato não coloca outro valor igual

console.log(mySet, mySet.size)

console.log(mySet.has('Rodrigo'), mySet.has('Goku') )
console.log(mySet.values())
let it = mySet.values()
it.next()
console.log(it.next())