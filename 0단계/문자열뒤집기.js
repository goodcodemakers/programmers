function solution(my_string) {
    var answer = 0;
    answer = my_string.split("");
    answer = answer.reverse();
    answer = answer.join("");
    console.log(answer);
    return answer;
}
//위 방법을 토대로 문제를 풀었으나 지금 와서 보니 코드가 길고 복잡해 보일수 있어 다른방법이 없을까 생각하다 
//my_string을 새배열에 담아서 뒤집어서 answer에 출력하는 join을 사용하는것이 직관적이고 가독성이 뛰어날것 같습니다 .
//그 방법은 아래와 같습니다 .
// var answer = [...my_string].reverse().join(''); 