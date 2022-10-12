// Problem: Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments
// for instance: node timer1.js 10 3 5 15 9 
// --> This will beep at : 3 seconds, 5 seconds, 9 seconds, 10 seconds, 15 seconds. 
// Edge Cases: 
// (1) no numbers are provided. 
// (2) An input is not a number. 
// (3) input is a negative number. 

// Pseudocode: 
// (1) Use process.argv.slice() method to take the nodeTimeNumbers from the "node timers1.js # # ##"
// (2) nodeTimeNumbers is an object which has strings which will need to be converted to integers (i.e. numbers) --> use the parseInt()
// (3) Once numbers are converted and stored, we will need those numbers to be used beep. --> we wi


// for (let j = 0; j < process.argv.length; j++) {
//   console.log(j + ' -> ' + (process.argv[j]));
// }

// console.log(typeof nodeTimeNumbers[0]); --> object with string properties. 

const timeNumbers = (object) => {
  const numbersArray = [];
  for (const string of object) {
    numbersArray.push(string); 
  }
  return numbersArray; 
}; 

const nodeTimeNumbers = timeNumbers(process.argv.slice(2)); 
let time = nodeTimeNumbers;

for (const element of nodeTimeNumbers) {
  const convertedNumber = parseInt(element);
  if (convertedNumber === NaN || convertedNumber < 0 || !convertedNumber) {
    console.log(`❌ The value "${element}" is not a positive number . \n➡️  Please provide a positive number.`)
  } else {
  setTimeout(() => {
    process.stdout.write('\x07');/// for it to me a system sound. 
  }, time)
  time =+ time;
  } 
};