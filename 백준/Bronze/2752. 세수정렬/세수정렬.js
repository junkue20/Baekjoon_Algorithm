const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const numArray = input[0].split(' ').map((item) => +item);

// 세수정렬
const result = () => {
  let answer = numArray.sort((a, b) => a - b);
  console.log(answer.join(' '));
};

result();