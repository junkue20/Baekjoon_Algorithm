const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const event = input[0].split(' ').map(Number);

const N = event[0];
const M = event[1];

// 뱀과 사다리 게임
// 1. 뱀 칸은 무조건 밟지 않도록 해야할 것 같음.
// 2. 사다리 중에서는 가능한 출발지로부터 가장 가까우면서 도착지점에 가깝게 내려주는 방법으로.

const answer = () => {
  // 구현 계획
  // 0. 사다리, 뱀 각각의 정보를 배열에 담아줘야 할 것 같음.
  // 1. 1 ~ 100까지의 수 중 snake[0]의 수들은 밟지 않도록 조건문 처리를 해야할 것 같음. (그런데 굳이 배열을 하나 더 만드는것보단 못가게끔 예외처리를 해주면 좋을 것 같음.)
  // 2. (y - x)의 값이 가장 큰 값이 반드시 타야 할 사다리. (단, 연이어서 사다리를 탈 수도 있는 상황이 존재할 수 있음.)
  // 3. 사다리까지 & 도착지점까지 1-6의 수로 도달 할 수 있는 최소 경로를 구하는 알고리즘

  const diceMap = new Array(101);
  const queue = []; // 현재 내 위치 & 누적 주사위 던진 수 기록용 queue
  queue.push([1, 0]); // 시작점인 1번 칸과 주사위 굴린 횟수 0을 큐에 추가

  const ladder = new Array(101).fill(0);
  const snake = new Array(101).fill(0);

  for (let i = 1; i < N + M + 1; i++) {
    // 이벤트 칸 등록
    if (i <= N) {
      const [x, y] = input[i].split(' ').map(Number);
      ladder[x] = y;
    } else {
      const [u, v] = input[i].split(' ').map(Number);
      snake[u] = v;
    }
  }

  // ------------------ 여기까지는 스스로 구현. 아래부터 코드를 참고.
  function getMinMoves() {
    const visited = new Array(101).fill(false); // boolean값으로 방문한 위치를 표기하는 듯 함.

    while (queue.length > 0) {
      const [position, diceCnt] = queue.shift();

      if (position === 100) return diceCnt; // 도착시 던진 주사위값 반환

      // 주사위로 이동 가능한 위치 탐색 (중요)
      for (let dice = 1; dice <= 6; dice++) {
        const nextPosition = position + dice;

        if (nextPosition <= 100 && !visited[nextPosition]) {
          // 방문안한 칸이라면 체크.
          visited[nextPosition] = true;

          // 사다리, 뱀 이벤트 관련 위치갱신 로직
          if (ladder[nextPosition] !== 0) queue.push([ladder[nextPosition], diceCnt + 1]);
          else if (snake[nextPosition] !== 0) queue.push([snake[nextPosition], diceCnt + 1]);
          else queue.push([nextPosition, diceCnt + 1]);
        }
      }
    }
  }
  console.log(getMinMoves());
};

answer();
