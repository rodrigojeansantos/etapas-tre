const log = console.log

// Somar todos os intervalos entre um numero
// exe: sumAll([4,1])
//      resp = 10

const numeros = [1, 5]
log(numeros)

// Solução simples, pode usar for
const somaSimples = numbers => {
  let soma = 0
  
  if(numbers[0] < numbers[1]) {
    for(let i=numbers[1]; i >= numbers[0]; i--) {
      soma += i
     // console.log(soma)
    }
  }
  if(numbers[1] < numbers[0]) {
    for(let i=numbers[0]; i >= numbers[1]; i--) {
      soma += i
     // console.log(soma)
    }
  }
  if(numbers[0] === numbers[1]) {
    soma = numbers[0]
  }
  return soma
}
log(somaSimples(numeros))


  // Solução elegante
const somaElegante = (Math.abs(numeros[0]-numeros[1])+1)*((numeros[0]+numeros[1])/2)
log(somaElegante)

