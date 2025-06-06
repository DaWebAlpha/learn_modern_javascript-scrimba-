//USING THE REST OPERATOR TO REMOVE ELEMENTS

let source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function removeFirstTwo(){
    const [ , ,...arr] = source;
    //const [ x, y,...arr] = source;
    return arr;
}

console.log(removeFirstTwo());