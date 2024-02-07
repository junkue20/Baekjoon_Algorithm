const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// let input = [];
let sites = {};
let result = [];
let N = 0; // 사이트 주소의 수
let M = 0; // 비밀번호를 찾으려는 사이트 주소의 수


/* 1트. 그냥 input 배열 push? */ 
// rl.on('line', (line) => {
//   input.push(line);
// }).on('close', async () => {
//   input.reduce((acc, cur) => {
//     if (N === 0 && M === 0) [N, M] = cur.split(' ').map(Number);
//     else {
//       for (let i = 0; i < N; i++) {
//         let line = cur.split(' ');
//         pw_Searcher(line[0], line[1]);
//       }
//     }
//   }, '');
//   console.log(result.join('\n'));
//   process.exit();
// });

// const pw_Searcher = (adr, pw) => {
//   if (!pw) {
//     for (let i = 0; i < input.length; i++) {
//       let line = input[i].split(' ');
//       if (line[0] === adr) {
//         result.push(line[1]);
//         break;
//       }
//     }
//   } else input.push(`${adr} ${pw}`);
// };

/* 2트. 객체 데이터 형식에 저장해서 고고*/ 
rl.on('line', (line) => {
  if (N === 0 && M === 0) [N, M] = line.split(' ');
   else if (N > 0) {
    let [site, password] = line.split(' ');
    sites[site] = password;
    N--;
  } else if (M > 0) {
    let password = sites[line];
    result.push(password);
    M--;
  }

  if (N === 0 && M === 0) {
    console.log(result.join('\n'));
    process.exit();
  }
});
