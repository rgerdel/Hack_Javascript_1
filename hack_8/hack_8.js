/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];
let len = arr.length;

for (let i = 0; i < len; i++) {
    if (arr[i]=="bar"|| arr[i]== "baz" || arr[i]=="qux"){
        let items = arr[i]
        if (items =="bar" || items ==="baz"){
            items = items.replace('a', '@');
        }
        if (items == "qux"){
            items = items.toUpperCase();
        }
        result.push(items);
    }   
}

console.log(result)



//export result
module.exports = result;