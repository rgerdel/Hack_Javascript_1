/**
 * mediante el while for iterar cada una de las letras del string "fooziman"
 * debes anexar los caracteres de string al array result
 * ["f","o","o","z","i","m","a","n"] 
 *
 *
 * output => ["f","o","o","z","i","m","a","n"]
 */
var log = console.log

let str = "fooziman";
let result = [];
let i = 0;
let len = str.length;

while (i < len){
    result.push(str[i])
    //result = log (str.split(""))
    i++
}

log(result)




//export result
module.exports = result;