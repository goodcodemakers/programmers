function solution(num, n) {
    var answer =0;
 if(num % n == 0){
 answer = 1;
}else if (num % n ==! 0){
answer = 0;
};
    return answer;
}
//배수일때 원하는 값을 뽑아내기위해서 if를 써서 조건을
//충족하는 값만 출력하였습니다.