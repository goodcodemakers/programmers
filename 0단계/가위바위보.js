function solution(rsp) {
    let answer = "";
    const winMap = { 0: 5, 2: 0, 5: 2 };

    for (let i = 0; i < rsp.length; i++) {
        answer += winMap[rsp[i]];
    }
    return answer;
}
//런타임 시간 0.06~8ms
//가위바위보를 낼때 해당되는 숫자를 내고 for문을 돌려 해당되는 배열번호에 숫자를바꿔서 누적시켜서 도출해냈습니다.