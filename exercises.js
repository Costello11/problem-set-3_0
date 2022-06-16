// Question 1
const isRealPalindrome = (str) => {
let rev = /[\W_]/g;
  let lowStr = str.toLowerCase().replace(rev, '');
  let revStr = lowStr.split('').reverse().join(''); 
  return revStr === lowStr;
};
console.log('Q1.........');
console.log(isRealPalindrome('madam'));              
console.log(isRealPalindrome('Madam'));
console.log(isRealPalindrome("Madam, I'm Adam"));  
console.log(isRealPalindrome('356653'));              
console.log(isRealPalindrome('356a653'));             
console.log(isRealPalindrome('123ab321')); 

// Question 2
const runningTotal = (arr) => {
  let runsum = (sum => value => sum += value)(0)
    return arr.map(runsum);
  // let runsum = 0;
  // let newarr = [];
  // for(let i = 0; i < arr.length; i++ ){
  //   newarr.push(runsum += arr[i]);
  // }
  // return newarr;
};
console.log('Q2.........');
console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([3]));
console.log(runningTotal([]));


// Question 3
const swap = (str) => {
 let news = str.split(' ');
};
console.log(swap('Oh what a wonderful day it is'));

// Question 4
const wordSizes = (str) => {
let obj = {};
let newstr = str.split(' ');
for (let i = 0; i < newstr.length; i++){
  if(obj[newstr[i].length]){
      obj[newstr[i].length] ++;
  }else {
    obj[newstr[i].length] = 1;
    }
  }
  return obj;
};
console.log('Q4.........');
console.log(wordSizes('Four score and seven.'));                     
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!')); 
console.log(wordSizes("What's up doc?"));                             
console.log(wordSizes(''));   
// let newstr = str.split(' ').forEach(x =>)
// Question 5
const union = () => {

};

// Question 6
const firstRecurring = () => {

};

// Question 7
const showMultiplicativeAverage = (array) => {
  let sum = 1;
  for (let i = 0; i < array.length; i++){
      sum *= array[i];
  }
      return (sum/array.length).toFixed(3);
};
console.log('Q7.........');
console.log(showMultiplicativeAverage([3, 5]));    
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));   

// Quetsion 8
const multiplyList = () => {
};

// Question 9
const sequence = () => {

};

// Question 10
const wordCap = () => {

};

// The below code connects this JS file to our test file
module.exports = {
  isRealPalindrome,
  runningTotal,
  swap,
  wordSizes,
  union,
  firstRecurring,
  showMultiplicativeAverage,
  multiplyList,
  sequence,
  wordCap,
};
