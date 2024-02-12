const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = Number(input);

const answer = (N) => {
  if ((N % 4 === 2) | (N % 4 === 0)) console.log('CY');
  if ((N % 4 === 1) | (N % 4 === 3)) console.log('SK');
};

answer(N);
