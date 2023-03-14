function solution(num_list) {
    var a = num_list.filter((i) => {
      return i % 2 == 0;
    }).length;
    var b = num_list.filter((i) => {
      return i % 2 !== 0;
    }).length;
    answer = [a, b];
    return answer;
  }
