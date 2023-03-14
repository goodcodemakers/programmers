function solution(numbers) {
    numbers.sort((a, b) => {
       return a - b;
     });
     var answer = numbers[numbers.length - 1] * numbers[numbers.length - 2];
   return answer;
}

