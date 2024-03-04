const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((item) => +item)
  .sort((a, b) => a - b);

// 대표값2
const result = () => {
  let newArr = input;

  if (newArr.includes(0)) {
    newArr = newArr.splice(1, 6);
  }

  let sum = 0;
  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }
  console.log(sum / 5);
  console.log(newArr[2]);

  // let sum = 0;
  // input.map((item) => (sum += item));
  // let avr = Math.floor(sum / 5);
  // if (sum !== 0) {
  //   console.log(avr);
  //   console.log(input[2]);
  // }
};
result();
