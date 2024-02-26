const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = Number(input.shift());
input = input.map((item) => item.split('').map(Number));

const visited = [];
for (let i = 0; i < N; i++) {
  visited.push(new Array(N).fill(0));
}

// 단지번호붙이기
const answer = () => {
  const moveY = [0, 0, 1, -1];
  const moveX = [1, -1, 0, 0];

  // 범위확인 (N x N 크기 제한)
  const rangeCheck = (x, y) => {
    if (x >= 0 && x < N && y >= 0 && y < N) return true;
    return false;
  };

  const answerSheet = [];
  let cnt = 0;

  // DFS
  const DFS = (y, x) => {
    if (rangeCheck(y, x) === true && input[y][x] === 1 && visited[y][x] === 0) {
      // 범위안에 들어가고 && 방문한적이 없으면 DFS 탐색
      visited[y][x] = 1; // 방문 처리
      cnt++;
      for (let i = 0; i < moveY.length; i++) {
        DFS(y + moveY[i], x + moveX[i]);
      }
    }
  };

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (Number(input[y][x]) === 1 && visited[y][x] === 0) {
        DFS(y, x);
        answerSheet.push(cnt);
        cnt = 0;
      }
    }
  }
  answerSheet.sort((a, b) => a - b); // 오름차순으로 정렬!
  const reply = [answerSheet.length, ...answerSheet];

  console.log(reply.join('\n'));
};

answer();
