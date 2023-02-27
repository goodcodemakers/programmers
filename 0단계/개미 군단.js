function solution(hp) {
  var answer = 0;
  const king = Math.floor(hp / 5);
  const knight = Math.floor((hp % 5) / 3);
  const poon = Math.floor(((hp % 5) % 3) / 1);
  answer = king + knight + poon;
  console.log(answer);
  return answer;
}
solution(999);
