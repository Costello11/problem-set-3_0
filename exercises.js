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
const swap = str => str.split(" ").map(word => {
  const len = word.length;
  if (len > 1) {
    word = word[len-1] +  word.substring(1, len-1) + word[0];
  }
  return word;
}).join(" ");
// const swap = (str) => {
//   str.map((x => x[0] + x.slice(1, x.length) + x[x.length-1])).join(' ');
//   return str;
 
// };

console.log('Q3.........');
console.log(swap('Oh what a wonderful day it is')  );
console.log(swap('Abcde'));
console.log(swap('a'));

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
const union = (arr1,arr2) => {
  let arr = [...new Set([...arr1,...arr2])];
  return arr;
};
console.log('Q5.........');
console.log(union([1, 3, 5], [3, 6, 9]));   
console.log(union([2, 2, 2, 2], [10, 5, 2]));


// Question 6
function firstRecurring(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str.charAt(i)) !== str.lastIndexOf(str.charAt(i))) {
      return str.charAt(i);
    }
  }
  return '';
}
console.log('Q6.........');
console.log(firstRecurring('reuben'));           // "e"
console.log(firstRecurring('anne'));             // "n"
console.log(firstRecurring('restaurant'));       // "r"
console.log(firstRecurring('paul'));       

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
const multiplyList = (arr1,arr2) => {
  let newarr = arr1.map((j,i) => j * arr2[i]);
  return newarr;
};
console.log('Q8.........');
console.log([3, 5, 7], [9, 10, 11]);
console.log([5, 10, 15, 20], [1, 2, 3, 4]);

// Question 9
const sequence = (array) => {
 let newarr = [];
 for (let i = 1; i <= array; i++){
   newarr.push(i);
   }
   return newarr;
};
console.log('Q9.........');
console.log(sequence(5));   
console.log(sequence(3));    
console.log(sequence(1));

// Question 10
const wordCap = (str) => {
 let array = str.toLowerCase().split(' ');
 for (let i = 0; i < array.length; i++){
   array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
 }
 return array.join(' ');
};
console.log('Q10.........');
console.log(wordCap('four score and seven'));
console.log(wordCap('the javaScript language'));
console.log(wordCap('this is a "quoted" word'));

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
