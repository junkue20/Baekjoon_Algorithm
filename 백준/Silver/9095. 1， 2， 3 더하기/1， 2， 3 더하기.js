const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, ...num] = input;

// 그냥 1, 2, 3도 포함이 되는구나.. 점화식 찾는데 시간이 조금 걸렸음.
const answer = (num) => {
  const dp = new Array(11);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let i = 4; i < dp.length; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  for (let i = 0; i < N; i++) {
    console.log(dp[Number(num[i])]);
  }
};

answer(num);


