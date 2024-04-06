const getRandomIntInRange = (min, max) => {
  if (min > max)throw new Error('min must be less than max')
    return Math.floor(Math.random() * (max - min) + min);
  };

console.log(getRandomIntInRange(5, 20))

const coolnessGauge = (numOfFridges) => {
  return numOfFridges >= 4  ? 'You are downright chilly!' : 'You need more fridges.';
};
console.log(coolnessGauge(0));
console.log(coolnessGauge(1));
console.log(coolnessGauge(2));
console.log(coolnessGauge(3));
console.log(coolnessGauge(4));
console.log(coolnessGauge(5));
console.log(coolnessGauge(6));
console.log(coolnessGauge(-1));
console.log(coolnessGauge(600));


const funkoPopAddictionLevel = (numOfFunkoPops) => {
  if (numOfFunkoPops === 0) {
    console.log('No pops? Maybe try one.');
  } else if (numOfFunkoPops > 20 && numOfFunkoPops <= 30) {
   console.log( 'You need help!')
  } else if (numOfFunkoPops <= 1 || numOfFunkoPops <= 10)  {
    console.log('Only a few? Keep having fun!')
  } else if (numOfFunkoPops >= 10 && numOfFunkoPops <= 20) {
    console.log( 'You have a problem.');
  } else {
    console.log( 'You need an intervention!!!');
  }
};

funkoPopAddictionLevel(0)
funkoPopAddictionLevel(1)
funkoPopAddictionLevel(10)
funkoPopAddictionLevel(11)
funkoPopAddictionLevel(20)
funkoPopAddictionLevel(21)
funkoPopAddictionLevel(30)
funkoPopAddictionLevel(31)
funkoPopAddictionLevel(100)


const getWeatherReport = (temperature) => {
  let weatherReport;
  const cold = "Wow, it's cold out.";
    const dryHeat = "At least it's a dry heat.";
    const hotGross = "It's hot and gross out.";
    const notTooBad = "It's not too bad!";
    if (temperature > 90) {
      weatherReport = hotGross;
    } else if (temperature > 70) {
      weatherReport = dryHeat;
    } else if (temperature >= 32 && temperature <= 70) {
      weatherReport = notTooBad;
    } else if (temperature < 32) {
      weatherReport = cold;
    }
    console.log(weatherReport);
    console.log("And that's your report!");
    return weatherReport
    
  };
  
  console.log(getWeatherReport(100))
  console.log(getWeatherReport(90))
  console.log(getWeatherReport(70))
  console.log(getWeatherReport(80))
  console.log(getWeatherReport(50))
  console.log(getWeatherReport(32))
  console.log(getWeatherReport(5))

const returnPositiveNegativeZero = (num) => {
  if (num > 0){
    return "Positive"
  }else if(num < 0){
    return "Negative"
  }else{
    return "Zero"
  }

  };

console.log(returnPositiveNegativeZero(0))
console.log(returnPositiveNegativeZero(1))
console.log(returnPositiveNegativeZero(2))
console.log(returnPositiveNegativeZero(-1))
console.log(returnPositiveNegativeZero(-2))
console.log(returnPositiveNegativeZero(5))


module.exports = {
  getRandomIntInRange,
  coolnessGauge,
  funkoPopAddictionLevel,
  getWeatherReport,
  returnPositiveNegativeZero,
};
