function solution(n, t) {
    //var answer = n* Math.pow(2,t);
    let startTime = performance.now();
    var answer = n <<t;
    let endTime = performance.now();
    console.log("시프트 연산자 << 함수를 사용한 실행시간" + (endTime - startTime) + "ms");
    console.log(answer);
    return answer;
}
solution(7,15); 
//Math.pow();는 2를 t번 곱한 값을 반환하는 함수입니다. 런타임시간 0.048599958419799805ms 내장함수;
//왼쪽 시프트 연산자인 << 를 사용하여  2의 거듭제곱수로 곱 할수 있습니다. 런타임 시간 0.0065000057220458984ms;