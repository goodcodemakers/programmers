function solution(cipher, code) {
    let answer = '';
    for (let i = code - 1; i < cipher.length; i += code) {
        answer += cipher[i];
    }
    console.log(answer);
    return answer;
}

// 런타임 시간 2.20ms 걸림 for문을 돌려서 하는 방법말고 다른 방법도 생각해 볼것 
solution("dfjardstddetckdaccccdegk",4);

