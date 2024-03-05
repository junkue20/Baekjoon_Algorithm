const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);
const times = input[1].split(' ').map(Number);

const result = (N, times) => {
  let Y_plan = 0;
  let M_plan = 0;
  for (let i = 0; i < N; i++) {
    Y_plan += 10 * Math.floor(times[i] / 30 + 1);
    M_plan += 15 * Math.floor(times[i] / 60 + 1);
  }

  if (Y_plan === M_plan) console.log('Y M', Y_plan);
  else if (Y_plan > M_plan) console.log('M', M_plan);
  else if (Y_plan < M_plan) console.log('Y', Y_plan);
};

result(N, times);
