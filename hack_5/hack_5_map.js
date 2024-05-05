/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
var log = console.log
let result = [];

for (let i = 7; i > 0; i-=2) { 
    result.push(i);
    arr = result  
  }
  
    let ls = arr.map((element)=>{
    return element
  })
  log (arr)

//export result
module.exports = result;