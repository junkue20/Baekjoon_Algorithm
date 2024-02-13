const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [n] = input;

const answer = () => {
  const dp = new Array(Number(n) + 1);
  dp[1] = 1;
  dp[2] = 3;
  dp[3] = 5;

  for (let i = 4; i < dp.length; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
  }

  console.log(dp[n]);
};

answer();
