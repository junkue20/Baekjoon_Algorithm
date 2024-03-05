const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 입력 처리
const N = parseInt(input[0]);
const fruits = input[1].split(' ').map(Number);

// 문제 해결 함수
function maxFruits(N, fruits) {
  let maxCount = 0;
  let fruitCount = new Map();
  let uniqueFruits = 0;
  let left = 0;

  // 맨 앞에서부터 하나씩 과일을 더해가며 탐색
  for (let right = 0; right < N; right++) {
    if (!fruitCount.has(fruits[right]) || fruitCount.get(fruits[right]) === 0) {
      uniqueFruits++;
    }
    fruitCount.set(fruits[right], (fruitCount.get(fruits[right]) || 0) + 1);

    // 두 가지 종류 이하의 과일로 이루어진 탕후루를 찾음
    while (uniqueFruits > 2) {
      fruitCount.set(fruits[left], fruitCount.get(fruits[left]) - 1);
      if (fruitCount.get(fruits[left]) === 0) {
        uniqueFruits--;
      }
      left++;
    }

    // 현재까지의 최대 탕후루의 길이 갱신
    maxCount = Math.max(maxCount, right - left + 1);
  }

  return maxCount;
}

// 결과 출력
console.log(maxFruits(N, fruits));
