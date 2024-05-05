/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"];
let result = [];
let items;
let numberStringArray = numberArray.concat(stringArray)




for(let i= 0; i < numberStringArray.length; i++){
    if (numberStringArray[i]=== 1){
        numberStringArray[i] = "one"
        items = numberStringArray[i];   
    }

    if (numberStringArray[i]=== 2){
        //numberStringArray[i] = numberStringArray[i]
        items = numberStringArray[i];   
    }

    if (numberStringArray[i]=== 3){
        numberStringArray[i] = "three"
        items = numberStringArray[i];   
    }

    if (numberStringArray[i]=== 4){
        //numberStringArray[i] = numberStringArray[i]
        items = numberStringArray[i];   
    }
    if (numberStringArray[i]=== 5){
        numberStringArray[i] = "five"
        items = numberStringArray[i];   
    }

    if (numberStringArray[i]=== "foo"){
            items = numberStringArray[i].replace('oo', '00');   
    }
    if (numberStringArray[i]=== "bar"){   
        items = numberStringArray[i].replace('b', 'B');         
    }
    if (numberStringArray[i]=== "baz"){   
        items = numberStringArray[i].replace('a', '@');         
    }
    if (numberStringArray[i]=== "qux"){   
        items = numberStringArray[i].replace('x', 'X');         
    }
    if (numberStringArray[i]=== "echo"){   
        items = numberStringArray[i].replace('echo', '3ch0');  
                
    }
    result.push(items)                 
}

let cantidad = numberStringArray.length
cantidad = Math.round (cantidad /= 2)

result.splice(0,0, "h@ck")
result.splice(cantidad + 1,0, "h@ck")
result.push("h@ck")
console.log(result)



//export result
module.exports = result;