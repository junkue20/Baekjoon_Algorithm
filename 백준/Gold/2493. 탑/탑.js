const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const heights = input[1].split(' ').map(Number);

const result = new Array(N).fill(0);
const stack = [];

for (let i = 0; i < N; i++) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] <= heights[i]) {
        stack.pop();
    }

    if (stack.length > 0) {
        result[i] = stack[stack.length - 1] + 1;
    } else {
        result[i] = 0;
    }

    stack.push(i);
}

console.log(result.join(' '));