/**
 * mediante el loop while agregar los números 0,1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [0,1,2,3,4,5]
 */
var log = console.log

let result = [];
let i = 0;

while (i <= 5) {
  result.push(i);
  i++;
}

log (result)


//export result
module.exports = result;