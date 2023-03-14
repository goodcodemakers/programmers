function solution(my_string, n) {
    let answer = my_string.split('').map(str => str.repeat(n)).join('');

    return answer
}

//런타임 0.05ms  
//split()메소드로 my_string에 들어가는 문자열을 문자하나하나를 하나씩 나열 한다음 .map()메소드를 활용하여 
//repeat()메소드를 사용하여 n만큼 반복시켜서 str라는 배열에 값을 넣어 join()으로 합쳐서 길게 나열하여 보여줬습니다 .
//현 문제는 각각 메소드가 무슨역할을하며  메소드의 종류에 대하여 공부할수 있는 문제입니다 .