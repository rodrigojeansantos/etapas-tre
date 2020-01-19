const log = console.log

//Usar if com for para verificar valor
var names = ["ram", "raj", "rahul"];

let newName = '';

const finder = "raj";

names.forEach(element => {
    if(element === finder){
        newName = element
    }else{
        console.log("erro")
    }
});

log(names)
log(newName)


//Usar some sem for
var namesA = ["ram", "raj", "rahul"];

log(namesA)

const boolean = namesA.some((element) => element === finder);

let newName2 = finder => {
    if(boolean === true){
    return finder
}}

log(newName2(finder))