const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

// 세수정렬
const check = (array) => {
  let cnt = array.filter((item) => 0 === item).length;

  if (cnt === 1) return console.log('A');
  if (cnt === 2) return console.log('B');
  if (cnt === 3) return console.log('C');
  if (cnt === 4) return console.log('D');
  if (cnt === 0) return console.log('E');
};

const result = () => {
  for (let i = 0; i < 3; i++) {
    check(input[i].split(' ').map((item) => +item));
  }
};
result();
