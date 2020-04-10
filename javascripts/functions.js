// jshint esversion: 7

//req. 3b
let arrAvg = (arr) => {
  let length = arr.length;
  let sum = 0;
  for (var i = 0; i < length; i++) {
    sum = arr[i] + sum;
  }
  return sum/length;
};

//req. 3c
let arrMax = (numbers) => {
  let i = 0;
  let currentMax = numbers[i];
  numbers.forEach(function(numbers){
    if (numbers > currentMax) {
      currentMax = numbers;
    }
  });
  return currentMax;
};

//req. 3d
let sumEvens = (arr) => {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if ((arr[i]%2) == 0 ){
      sum = arr[i] + sum;
    }
  }
  return sum;
};
