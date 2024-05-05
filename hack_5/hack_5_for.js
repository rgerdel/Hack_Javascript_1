/**
 * mediante el loop for agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
var log = console.log
let result = []

for (let i = 7; i > 0; i-=2) {
    
  result.push(i);
}

log (result)


//export result
module.exports = result;