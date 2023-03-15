function solution(array, n) {
    var answer = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] === n){
        answer++;    
        }
    }
    console.log(answer)
    return answer;
}
//런타임 2.68ms 
function solution(array, n) {
    var answer = array.filter(i => i ===n).length

    console.log(answer)
    return answer;
}
//런타임 2.14ms