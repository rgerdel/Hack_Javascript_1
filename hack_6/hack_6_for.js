/**
 * mediante el loop for iterar cada una de las letras del string "fooziman"
 * debes anexar los caracteres de string al array result
 * ["f","o","o","z","i","m","a,"n"] 
 *
 *
 * output => ["f","o","o","z","i","m","a,"n"]
 */
var log = console.log

let str = "fooziman";
let result = [];
let arr = [];

for(let i = 0; i < str.length; i++) {
    result.push(str[i]);
}
console.log(result); 



//export result


module.exports = result;