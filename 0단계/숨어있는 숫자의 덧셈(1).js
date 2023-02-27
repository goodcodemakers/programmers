function solution1(my_string) {
  var answer = 0;
  for (let i = 0; i < my_string.length; i++) {
    let counter = my_string[i];
    if (counter >= "0" && counter <= "9") {
      answer += parseInt(counter);
    }
  }
  console.log(answer);
  return answer;
}
solution1("aAb1B2cC34oOp");
