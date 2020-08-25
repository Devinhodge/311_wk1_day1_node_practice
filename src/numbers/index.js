const isEven = (num) => {
  // write code for numbers.isEven
if(num % 2 === 0){
  return true;
} else {
  return false;
  }
}

const sum = (arr) => {
  // write code for numbers.sum
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
    return sum;
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
for(let i = 0; i < arr.length; i++){
  for(let n = 0; n < arr.length; n++){
    if (arr[i] + arr[n] === sum)
      return true;
   }
  }
  return false;
}

module.exports = {
  isEven,
  sum,
  comboSum
}