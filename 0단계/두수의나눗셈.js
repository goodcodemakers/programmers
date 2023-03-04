function solution(num1, num2) {
    var answer = Math.trunc((num1 / num2)*1000);
    return answer;
}
//Math.trunc는 주어진값의 소수부분을 제거하고 숫자의 정수부분을 반환하는 함수입니다.