// function solution(age) {
//     var answer = 0;
//      answer = new Date().getFullYear() - age + 1;   
//     return answer;
// }
// 2022년당시에 처음으로 이렇게 코드를짯으나 문제에서는2022년으로 고정된반면
//년도가 바뀔시 틀리게되는점을 고려하여 아래같이 작성
function solution(age) {
    var answer = 0;
     answer =2022 - age + 1;   
    return answer;
}