/**
 * mediante el loop while agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 *  output => [5,4,3,2,1]
 */
var log = console.log

let result = [];
let i = 5;

while (i > 0) {
  result.push(i);
  i--;
}

log (result)


//export result
module.exports = result;