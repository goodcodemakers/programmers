function solution(box, n) {
    var answer = 0;
          
         let width =  Math.floor(box[0] / n);
         let area = Math.floor(box[1]/ n) ;
        let heigth = Math.floor(box[2]/ n) ;
     answer = width * area * heigth
        console.log(answer );
        console.log(Math.floor(box[0] /n));
        return answer;
}
solution([10,8,6], 3)
