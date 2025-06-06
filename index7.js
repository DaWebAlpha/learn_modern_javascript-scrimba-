//REST PARAMETER
const sum = (function(){
    return function sum(...args){
        return args.reduce((acc, cum) => acc + cum, 0);
    }
})();

console.log(sum(1, 2, 3, 4, 5));