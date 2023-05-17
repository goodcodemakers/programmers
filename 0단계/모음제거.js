function solution(my_string) {
    var answer = '';
    for(let i = 0; i < my_string.length; i++ ){
        if('aeiouAEIOU'.indexOf(my_string[i]) === -1){answer += my_string[i];
    }}
    return answer;
}

//모음을 aeiou와 대문자두가지를 넣어 indexOf로 하여 아닌경우를 answr에 담아냅니다.