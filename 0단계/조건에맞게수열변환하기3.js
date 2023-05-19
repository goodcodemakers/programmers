function solution(arr, k) {
    var answer = [];
    for(let i = 0; i < arr.length; i++){
        if(k % 2 == 0){
          answer[i] = arr[i] + k;
        }else{
            answer[i] = arr[i] * k;
        }    
    }
    return answer;
}
//조건은 k가 변할때 마다 곱과 합을 해주는것으로 if문으로 간단히풀수있습니다.