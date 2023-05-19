function solution(num_list) {
    var answer = [];
   answer = num_list.sort((a, b)=> a -b).slice(0,5);
    return answer;
}
solution([12, 4, 15, 46, 38, 1, 14])
//처음 문제를 보고 느낀건 배열을 정렬할 필요가 있다고 느꼇고 
//배열을 내림차순,오름차순으로 정렬하기위해서 sort()함수를 사용하였으며
//그 배열중에 낮은 숫자 5개가 필요함으로 오름차순으로 정렬 후 slice()
//함수를 사용하여 처음인 0인덱스부터 하여 인덱스번호 4번까지 필요하기때문에
//5번전 까지 짤라 넣어주면 간단히 해결됩니다.