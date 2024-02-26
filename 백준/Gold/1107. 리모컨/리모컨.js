const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const [M] = input[1].split(' ').map(Number);

// 리모컨
const answer = () => {
  if (N === 100) return console.log(0); // 100이면 0 출력

  let brokenBtn = input[2]?.split(' ') || []; // 고장난 버튼이 존재하면 배열에서 제외.
  let btnCnt = Math.abs(100 - N); // + , - 로만 이동했을 때 나올 수 있는 수

  for (let i = 0; i < 1000000; i++) {
    // N 값이 최대 500,000까지이지만, 채널은 무한임을 고려, 1,000,000까지 반복
    let isValid = true;
    const str = i.toString();

    for (let j = 0; j < str.length; j++) {
      // 고장나지 않은 버튼들로 포함되어 있는지 판단
      if (brokenBtn?.includes(str[j])) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      // 가장 작은 값 구하기
      btnCnt = Math.min(btnCnt, Math.abs(i - N) + str.length);
    }
  }
  console.log(btnCnt);
};

answer();

// 고려가 부족했던 부분
// 1. + - 버튼만으로 채널이동함을 고려해야함.
// 2. 브루트포스 => 무식하게 한번 구현해보려는 자세가 부족했던 듯..
