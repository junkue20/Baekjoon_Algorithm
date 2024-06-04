const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((item) => +item);

// 제로
const result = () => {
  let answer = [];
  let sum = 0;
  for (let i = 1; i < input.length; i++) {
    if (input[i] !== 0) answer.push(input[i]);
    else answer.pop();
  }
  answer.forEach((num) => {
    sum += num;
  });
  console.log(sum);
};
result();
