/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
var log = console.log

let result = [];
let i = 7;

while (i > 0) {
  result.push(i);
  i-=2;
}

log (result)


//export result
module.exports = result;