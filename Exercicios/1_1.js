//usando for, e o segundo usando outra coisa, colocar primeira letra me maiuscula

const log = console.log

/* Com Loops */
let names = ["Jack", "Jecci", "Ram", "Tom"];

let name=[]

for (let index = 0; index < names.length; index++) {
    let n = names[index].toUpperCase()
    name.push(n);
}

log(names)

log(name)

/* Sem loop */
let namesMap = ["Jack", "Jecci", "Ram", "Tom"];

let name2=[]

namesMap.map((element)=>{
    let n = element.toUpperCase()
    name2.push(n);
})

log(namesMap);
log(name2);