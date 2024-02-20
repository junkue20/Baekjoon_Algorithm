const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const coordinate = input[0].split(' ').map(Number);
const N = coordinate[0];
const M = coordinate[1];

// 타일을 좀 더 쉽게 0과 1로 바꿔보자.
const tile = input.slice(1).map((line) =>
  line
    .trim()
    .split('')
    .map((item) => (item === '-' ? 0 : 1))
);

// 바닥 장식
const answer = () => {
  let countN = 0;
  let countM = 0;

  // 가로줄 검사
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (tile[i][j] === 0 && tile[i][j] !== tile[i][j - 1]) {
        countN++;
      }
    }
  }

  // 세로줄 검사
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (tile[j][i] === 1 && (j === 0 || tile[j][i] !== tile[j - 1][i])) {
        countM++;
      }
    }
  }

  console.log(countM + countN);
};

answer();
