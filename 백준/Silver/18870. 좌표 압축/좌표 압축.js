const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, coordinate] = input;

const answer = (N, coordinate) => {
  coordinate = coordinate.split(' ').map((i) => Number(i));

  let object = {};
  const answer = [];
  const set = Array.from(new Set([...coordinate])).sort((a, b) => a - b);

  set.forEach((item, idx) => (object[item] = idx));

  for (let i = 0; i < N; i++) {
    answer.push(object[coordinate[i]]);
  }

  return answer.join(' ');
};

console.log(answer(N, coordinate));
