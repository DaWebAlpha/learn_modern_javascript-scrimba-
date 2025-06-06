//Destructuring Assignments
const score = {
    x : 10,
    y : 12,
    z : 5,
}

// const x = score.x;
// const y = score.y
// const z = score.z;

const{x , y, z} = score;

console.log(x,y, z);


//DESTRUCTURING NESTED OBJECTS
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";

  const { tomorrow : { max : maxOfTomorrow }} = forecast; 

  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); 