//use destructuring assignment to pass an Object as Function's Parameter
const stats = {
    max: 20,
    min: 10,
    willRain: false,

}

const half = (function(){
    return function half({max, min}){
        return (max + min)/ 2.0
    }

})();

console.log(half(stats));