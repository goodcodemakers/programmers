function solution(numbers, n) {
    var answer = 0;
    for (let i = 0; i < numbers.length; i++) {
        answer += numbers[i];
        if(answer > n){
        break;
        }
        
    }
    return answer;
}
solution([34, 5, 71, 29, 100, 34], 123);