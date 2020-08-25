const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim);
}

const pairs = (str) => {
  // write code for strings.pairs
  let x = [];
  for(let i=0; i < str.length-1;i++){
    if(i%2===0){
      x.push(`${str[i]}${str[i+1]}`)
    }
  }
  return x
}

const reverse = (str) => {
  // write code for strings.reverse
let r = str.split('').reverse().join('');
return r;
}

module.exports = {
  split,
  pairs,
  reverse
}