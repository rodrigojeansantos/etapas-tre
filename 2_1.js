const log = console.log

// Sum All Numbers in a Range
// exe: sumAll([4,1])
//      resp = 10

// simple solution
function sumAllSimple(arr) {
    // Figure out the minimum and maximum numbers in the array
    const min = Math.min(...arr)
    const max = Math.max(...arr)
  
    // variable to hold our sum
    let sum = 0
  
    // loop and add all numbers from lowest to highest value
    for (let i = min; i <= max; i++) {
      sum += i
    }
  
    // return the sum
    return sum
  }
  
  log(sumAllSimple([1, 4]))


  // Ok solution
  function sumAllOk(arr) {

    const [min, max] = [Math.min(...arr), Math.max(...arr)]          
    const count = max - min + 1
        
    return ((min + max) * count) / 2
  }
  
  log(sumAllOk([1, 4]))