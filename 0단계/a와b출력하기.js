const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    console.log(`a = ${input[0]}\nb = ${input[1]}`);
});
//출력을 a = 4 
// b= 5로 해야하다보니 감싸준 상태에서 값을 불러왔고
//줄바꿈을 해주는 /n을 쓴것만 이해하면 쉽습니다.
