function solution(num_list) {
    var answer = 0;
    let result = 1;
    for(let i = 0; i < num_list.length; i++){
        if(num_list.length >= 11){
            answer += num_list[i];
           
        }else{
            result *= num_list[i];
            answer = result;
        }
    }
    return answer;
}
//곱을 할때에는 최초값이 1이여야 합니다 0을 곱하면 0만나오기때문에 주의!