function solution(n) {
    var answer = 0;
    for (let i = 0; i <= n; i++) {      
        if (i % 2 == 0) {
          answer += i    
        }
      }
    return answer;
}
//for문을 사용하여 주어진 매계변수인 n만큼 반복을하여 0~n까지
//반복시키는데 i를 나눠 0으로 떨어질떄마다 answer 의값을 1씩 카운팅하였습니다.