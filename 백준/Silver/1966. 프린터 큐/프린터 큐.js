// 제출 시 readFileSync파라미터는 ./dev/stdin 로 수정 필요.
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [test_Num, ...testCases] = input;

const answer = (test_Num, testCases) => {
  for (let i = 0; i < test_Num; i++) {
    let counter = 1;
    let M = Number(testCases[i * 2].split(' ')[1]);
    const queue = testCases[i * 2 + 1].split(' ').map((num) => Number(num));

    while (true) {
      const target = queue.shift();
      if (Math.max(...queue) <= target && M === 0) {
        console.log(counter);
        break;
      } else if (Math.max(...queue) > target && M === 0) {
        queue.push(target);
        M = queue.length - 1;
      } else if (Math.max(...queue) <= target) {
        counter += 1;
        M -= 1;
      } else if (Math.max(...queue) > target) {
        queue.push(target);
        M -= 1;
      }
    }
  }
};

answer(test_Num, testCases);
