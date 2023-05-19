function solution(num_list) {
    var answer = [];
    answer = num_list.sort((a, b)=> a - b).slice(5, num_list.length + 1);
    return answer;
}
//오름차순으로 sort()함수를 써서 정렬 a -b 오름차순 a + b는 내림차순
//5번째 인덱스 부터 나머지를 모두 가져와 answer에 새로넘겨줌으로써 해결