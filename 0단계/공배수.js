function solution(number, n, m) {
    var answer = 0;
    if(number % n == 0 && number % m == 0){
        answer = 1;
}
    return answer;
}

//공배수 즉 두개의 정수의 곱이 둘다 표함될 때 1이 표기가 되면 됩니다 
//and는 &&로 씁니다.