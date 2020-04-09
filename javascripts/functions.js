// jshint esversion: 7

//req. 3b
let arrAvg = (arr) => {
  let sum = 0;

  for (var i = 0; i < arr.length; i++) {
    //arr[i]
  }
};

//req. 3c
let arrMax = (numbers) =>{
  let currentMax = numbers[0];
  numbers.forEach(function(numbers){
    if (numbers > currentMax) {
      currentMax = numbers;
    }
  });
  return currentMax;
};
