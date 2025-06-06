
//arrows functions
const date = () => new Date();
console.log(date());


//ANonymous function
const getDate = function(){
    return new Date();
}

console.log(getDate());

//arrow function with parameters
var myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));