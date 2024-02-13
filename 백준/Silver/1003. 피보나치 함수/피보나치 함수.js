const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, ...num] = input;

const answer = (num) => {
  const dp = new Array(41);
  dp[0] = [1, 0];
  dp[1] = [0, 1];

  for (let i = 2; i < dp.length; i++) {
    dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
  }

  for (let i = 0; i < N; i++) {
    console.log(dp[Number(num[i])].join(' '));
  }
};

answer(num);
