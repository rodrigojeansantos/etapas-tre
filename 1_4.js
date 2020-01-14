const log = console.log

//Checking if an Array Contains a Value
var names = ["ram", "raj", "rahul"];
for(let i=0, totalNames = names.length; i< totalNames ; i= i +1) {
   if(names[i] === "rahul") {
     log("found rahul");
     // return; 
   }
}

//Using some
var namesA = ["ram", "raj", "rahul"];
let isRamPresent = namesA.some(namesA => namesA==="ram");
if(isRamPresent) {
  log("found ram"); 
}