const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = parseInt(input[0]);
const cost = input.slice(1).map(line => line.split(' ').map(Number));

const dp = Array.from({ length: N }, () => [0, 0, 0]);

dp[0] = cost[0];

for (let i = 1; i < N; i++) {
    dp[i][0] = cost[i][0] + Math.min(dp[i-1][1], dp[i-1][2]);
    dp[i][1] = cost[i][1] + Math.min(dp[i-1][0], dp[i-1][2]);
    dp[i][2] = cost[i][2] + Math.min(dp[i-1][0], dp[i-1][1]);
}

const minCost = Math.min(...dp[N-1]);
console.log(minCost);