const filePath = process.platform === 'linux' ? 'dev/stdin' : './6월/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((item) => +item);

// 스택 수열
const result = () => {
  let stack = [];
  let answer = [];
  let stackNum = 1;

  for (let i = 1; i <= input[0]; i++) {
    while (stackNum <= input[i]) {
      stack.push(stackNum);
      stackNum++;
      answer.push('+');
    }
    answer.push('-');

    if (stack.pop() !== input[i]) {
      answer = ['NO'];
      break;
    }
  }
  console.log(answer.join('\n'));
};
result();
