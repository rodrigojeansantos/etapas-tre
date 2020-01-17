/* Colocar todos os nomes dos arrays em maiúsculas */

const log = console.log

/* Com Loops */
let names = ["Jack", "Jecci", "Ram", "Tom"];
const namesMaiusculo = new Array()
/* Sem loop */
let namesMap = ["Jack", "Jecci", "Ram", "Tom"];
let namesMapMaiusculo = new Array()

// Com loop
for(let i=0; i < names.length; i++) {
  namesMaiusculo[i] = names[i].toUpperCase()
}
log('names = ', names, '\n', 'namesMaiusculo = ', namesMaiusculo)

// Com map
namesMapMaiusculo = namesMap.map(nome => nome.toUpperCase())
log('namesMap = ', namesMap, '\n', 'namesMapMaiusculo = ', namesMapMaiusculo)