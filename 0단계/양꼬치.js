function solution(n, k) {
    var answer = 0;
   answer = (12000 * n) + (2000*k) -(Math.trunc(n/10)*2000)
    return answer;
}