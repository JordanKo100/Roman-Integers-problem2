/**
 * @param {string} s
 * @return {number}
 */

var s = "MCMXCIV";

var romanToInt = function(s) {
  var arr = [];
  var subtractValues = [];
  let sum = 0;
  let subtractSum = 0;
  const conversions = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ]);

  //splitting each character into individual characters
  const romanValues = s.split("");

  //converting the chars into integers
  for(var i = 0; i < s.length; i++){
    arr[i] = conversions.get(romanValues[i]);
  }

  //storing values that need to be subtracted
  for(var j = 0; j < arr.length; j++){
    if (arr[j] < arr[j+1]){
      subtractValues.push(arr[j]);
    }
    sum += arr[j];
  }

  for(var k = 0; k < subtractValues.length; k++){
    subtractSum += subtractValues[k];
  }

  var total = sum - (subtractSum*2);
  return total;
};

console.log(romanToInt(s));