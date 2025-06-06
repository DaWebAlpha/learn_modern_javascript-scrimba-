function objectFreeze(){
    "use strict"
    const MATH_CONSTANTS = {
        PI: 3.142,
    }
    Object.freeze(MATH_CONSTANTS);

    try{
        MATH_CONSTANTS.PI = 99;
    }catch(ex){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = objectFreeze();
console.log(PI);