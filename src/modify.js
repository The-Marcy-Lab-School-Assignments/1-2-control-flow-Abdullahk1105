const wildlyBiasedReview = (location) => {
  if (typeof location !== 'string'){
    console.log("not a place")
    return;
  }

  if (location === 'NYC') {
    console.log('THE GREATEST CITY IN THE WORLD');
    console.log('THE CITY THAT NEVER SLEEPS');
    console.log('WOW WHAT A CITY');
    return 
  }
  

  return console.log('Yea that place is cool I guess');
  
};

wildlyBiasedReview("Brooklyn");
wildlyBiasedReview(100);

module.exports = {
  wildlyBiasedReview,
};
