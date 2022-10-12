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
    process.stdout.write('\x07');
  }, time)
  time =+ time;
  } 
};