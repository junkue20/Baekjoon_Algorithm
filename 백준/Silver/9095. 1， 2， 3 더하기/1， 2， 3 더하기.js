const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, ...num] = input;

// 그냥 1, 2, 3도 포함이 되는구나;; 점화식 찾는데 늦어버림..

// const answer = (num) => {
//   const dp = new Array(11);
//   dp[1] = 1;
//   dp[2] = 2;
//   dp[3] = 4;

//   for (let i = 4; i < dp.length; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
//   }

//   for (let i = 0; i < N; i++) {
//     console.log(dp[Number(num[i])]);
//   }
// };

// answer(num);

const answer = (num) => {
  const dp = new Array(11);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;
  dp[4] = 7;
  dp[5] = 13;
  dp[6] = 24;
  dp[7] = 44;
  dp[8] = 81;
  dp[9] = 149;
  dp[10] = 274;

  for (let i = 0; i < N; i++) {
    console.log(dp[Number(num[i])]);
  }
};

answer(num);
