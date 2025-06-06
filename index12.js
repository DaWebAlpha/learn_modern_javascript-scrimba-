//template literals
const person = {
    name: "Maxi",
    age: 36,

}

const greeting = `Hello my name is ${person.name}.
I am ${person.age} years old`;

console.log(greeting);



const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  const resultDisplayArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
  }

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`, 
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray)




const createPerson = (name, age, gender) => {

  return {
    name: name,
    age: age,
    gender: gender
  };

};
console.log(createPerson("Zodiac Hasbro", 56, "male")); 

//OR

const createPerson1 = (name, age, gender) => ({name, age, gender});
console.log(createPerson1("Zodiac Hasbro", 56, "male")); 