const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((item) => +item);

// 홀수
const result = () => {
  const oddNum = input.filter((item) => item % 2 === 1);

  if (oddNum.length === 0) {
    console.log(-1);
    return;
  } else {
    let sum = 0;
    oddNum.map((item) => (sum += item));
    console.log(sum);
    console.log(oddNum.sort((a, b) => a - b).shift());
  }
};
result();
