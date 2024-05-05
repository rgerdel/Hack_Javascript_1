/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */

var log = console.log
let result = []

for (let i = 1; i <= 7; i+=2) {
    
    result.push(i);
    arr = result
    
  }
  
  let ls = arr.map((element)=>{
    return element
  })
  log (arr)


//export result
module.exports = result;