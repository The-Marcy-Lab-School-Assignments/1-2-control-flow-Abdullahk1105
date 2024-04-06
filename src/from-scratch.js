// Question 1: measureRain

const measureRain = (inches) => {
  if (inches === 0){
    console.log( "drought")
  }else if (inches < 2 && inches > 0){
    console.log("dry")
  }else if (inches < 4 && inches >= 2){
    console.log("average")
  }else if (inches < 6 && inches >= 4){
    console.log( "rainy")
  }else{
    console.log("flood")
  }
};

measureRain(0)
measureRain(1)
measureRain(2)
measureRain(3)
measureRain(4)
measureRain(5)
measureRain(6)
measureRain(7)
measureRain(10)

// Question 2: happyBirthdayPet
const snake = 'snake'; // these string constants prevent typos
const cat = 'cat';
const dog = 'dog';

const happyBirthdayPet = (breed, age) => {
  if (breed === snake && age >= 0){
    console.log("Hiss hiss!");
  }else if(breed === cat && age < 5){
    console.log('Mew mew!');
  }else if(breed === cat && age >= 5){
    console.log('Meow meow!');
  }else if(breed === dog && age < 5){
    console.log('Arf arf!');
  }else if(breed === dog && age >= 5 && age < 10){
    console.log('Woof woof!');
  }else if(breed === dog && age >= 10){
    console.log('Boof!');
  }else{
    console.log ("Happy birthday!")
  }
}
happyBirthdayPet(snake, 0);
happyBirthdayPet(snake, 4);
happyBirthdayPet(cat, 2);
happyBirthdayPet(cat, 5);
happyBirthdayPet(cat, 10);
happyBirthdayPet(dog, 4);
happyBirthdayPet(dog, 5);
happyBirthdayPet(dog, 9);
happyBirthdayPet(dog, 10);
happyBirthdayPet(dog, 11);
happyBirthdayPet("bird", 1);
happyBirthdayPet("racoon", 5);




// Question 3: funTypes

const funTypes = (jsType) => {
  if (typeof jsType === 'string') {
    console.log("That's just some text."); 
    }else if (Number.isNaN(jsType)){
     console.log( "Well, now you're just showing off.");
  }else if (typeof jsType === 'number'){
    console.log("That's a good number.");
  }else if (typeof jsType === 'boolean'){
    console.log("To bool, or not to bool?");
  }else if (typeof jsType === 'undefined'){
    console.log( "Nothing, but I didn't set that.")
  }else if ( jsType === null){
    console.log( "Nothing, and I did set that.")
    }else if (Array.isArray(jsType)){
     console.log("I order you to be indexed.")
  }else if (typeof jsType === 'object'){
    console.log("Anybody got the key?")
  }
}
  
funTypes('');
funTypes(NaN);
funTypes(10);
funTypes(true);
funTypes(false);
funTypes(undefined);
funTypes(null);
funTypes([1,2,3]);
funTypes({});

// Question 4: rounder

const rounder = (float, roundSetting) => {
    if (roundSetting === "up"){
        return Math.ceil(float)
    }else if (roundSetting === "down"){
        return Math.floor(float)
    }else if (roundSetting === "honest"){
        return Math.round(float)
    }else {
      return "pick a valid rounding number"
    }
}
console.log(rounder(1.0, "up"))
console.log(rounder(1.1, "up"))
console.log(rounder(3.9, "up"))
console.log(rounder(1.9, "down"))
console.log(rounder(5.0, "down"))
console.log(rounder(5.1, "down"))
console.log(rounder(1.9, "honest"))
console.log(rounder(1.5, "honest"))
console.log(rounder(1.4, "honest"))
console.log(rounder(1.0, "honest"))

// Question 5: fizzBuzzish

const fizzBuzzish = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log('fizzBuzz!')
    } else if (num % 5 === 0) {
      console.log('buzz')
    } else if (num % 3 === 0) {
     console.log( 'fizz')
    } else {
    console.log(num)
        }
};
fizzBuzzish(1);
fizzBuzzish(2);
fizzBuzzish(3);
fizzBuzzish(4);
fizzBuzzish(5);
fizzBuzzish(10);
fizzBuzzish(12);
fizzBuzzish(15);
fizzBuzzish(30);
fizzBuzzish(31);





module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  fizzBuzzish,
};
