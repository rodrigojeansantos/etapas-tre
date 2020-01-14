const log = console.log

/* With Loops */
let names = ["Jack", "Jecci", "Ram", "Tom"];
let upperCaseNames = [];
for(let i=0, totalNames = names.length; i< totalNames ; i= i +1) {
    upperCaseNames[i] = names[i].toUpperCase();
}

log(upperCaseNames)

/* Without loop */
let namesMap = ["Jack", "Jecci", "Ram", "Tom"];
let upperCaseNamesMap = namesMap.map(namesMap => namesMap.toUpperCase());
log(upperCaseNamesMap)