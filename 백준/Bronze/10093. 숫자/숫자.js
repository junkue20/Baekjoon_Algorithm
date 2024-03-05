const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [a, b] = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const result = () => {
  const arr = [];
  for (let i = a + 1; i < b; i++) {
    arr.push(i);
  }

  console.log(arr.length);
  console.log(arr.join(' ').toString());
};

result();
