function solution(sides) {
    var answer = 0;
    sides.sort((a,b)=>{
       return a - b;
    })
    if(sides[2] >= sides[1] + sides[0]){
        answer = 2
    }else{
        answer =1
    }
    return answer;
}