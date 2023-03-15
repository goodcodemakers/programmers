function solution(n, t) {
    // var answer = n* Math.pow(2,t);
    var answer = n <<t;
    console.log(answer);
    return answer;
}
solution(7,15); 
//Math.pow();는 2를 t번 곱한 값을 반환하는 함수입니다.
//왼쪽 시프트 연산자인 << 를 사용하여  2의 거듭제곱수로 곱 할수 있습니다.