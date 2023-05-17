function solution(num_list, n) {
    var answer = 0;
    for(let i = 0; num_list.length >= i; i++ ){
        if(num_list[i] == n){
            answer = 1;
        }
    }
    return answer;
}

//한번이라도 원하는 정수의 값이 들어오게되면 answer를 1로 바꿔주기만 하면됩니다.
