function solution(str1, str2) {
    var answer = 0;
    if(str2.includes(str1) == true){
        answer = 1;
    }
    return answer;
}
//includes()함수를 사용시 Boolean의 값으로 true ,false로 값이 떨어지는것을
//이용하여 하나의 조건을 잡아주기만 하면 간단한 문제입니다.