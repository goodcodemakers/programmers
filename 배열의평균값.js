function solution(numbers) {
    var answer = 0;
    for(let i = 0 ; i < numbers.length; i++){
        answer = answer + numbers[i] / numbers.length;
    } 
    return answer;
}
//위는 반복문을 사용하여 하나하나씩 넣어서 돌린것
//런타임 0.04ms

function solution(numbers) {
   var answer =numbers.reduce((total,currentValue)=>total + currentValue);
   answer = answer / numbers.length;
    return answer 
}
//아래는 reduce()함수를 사용하여 배열의 각요소를 순회하여 콜백함수를 호출,
//이전 콜백의 반환값을 사용하여 누적값을 계산 
//그 후  평균값을 구하기 위해 numbers.length로 나눠 평균값 빼냈습니다.
//런타임 0.04ms 