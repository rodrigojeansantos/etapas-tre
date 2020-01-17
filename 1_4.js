const log = console.log

//Usar if com for para verificar valor
var names = ["ram", "raj", "rahul"];

const verificaNames = valor => {

  for(let i=0; i < names.length; i++) {

    if(valor === names[i]){
      return `Valor ${valor} encontrado`
    }
    return `Valor ${valor} não encontrado`
  }
}
log(verificaNames('ram'))


//Usar some sem for
var namesA = ["ram", "raj", "rahul"]

const verificaNamesA = valor => {
  if(namesA.some(element => element === valor)) {
    return `Valor ${valor} encontrado`
  }
  return `Valor ${valor} não encontrado`
}

log(verificaNamesA("ram"))