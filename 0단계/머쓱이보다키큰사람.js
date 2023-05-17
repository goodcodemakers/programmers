function solution(array, height) {
    var answer = 0;
    answer = array.filter(function(i){
      return  i > height
    }).length
    return answer;
}