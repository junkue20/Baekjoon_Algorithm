const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let [A, B] = input[0].split(' ').map(Number);
let cnt = 0;

// A->B
const answer = () => {
  while (A <= B) {
    // 끝자리가 1인 경우는 1만 똑 떼어낼 것.
    // 아닐땐 2로 나눌 것.
    if (B % 10 === 1) B = Number.parseInt(B / 10);
    else B /= 2;
    ++cnt;
    if (A === B) {
      ++cnt;
      return console.log(cnt);
    }
  }

  if (A !== B) console.log(-1);
};

answer();
