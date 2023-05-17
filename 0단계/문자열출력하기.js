const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    console.log(str);
});

//다른 문제와 달리 최신에 나온것으로
//require를 하여 불러온것에서 인풋과 아웃풋으로 
//어디에다가 콘솔을 찍어서 출력할지만 알면 쉬운문제입니다.