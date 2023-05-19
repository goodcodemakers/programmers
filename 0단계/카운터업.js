function solution(start, end) {
    var answer = [];
    for (let i = start; i <= end; i++) {
        answer.push(i);
    }
    return answer;
}

//문제점 배열이라는것을 잊고 
//answer += answer[i];
//를 하려 하였으나 처음에 배열로 정해주었기때문에 푸쉬로 넣어주는것이맞습니다.