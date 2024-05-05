/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];
var log = console.log;
let i = 0;
let len = arr.length ;

for (let i = 0; i < len; i++) {
    
    result.push(arr[i][0].toUpperCase() + arr[i].substring(1));
  }
  
log (result)

//export result
module.exports = result;