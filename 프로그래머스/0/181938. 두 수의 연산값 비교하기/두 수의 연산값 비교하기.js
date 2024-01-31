function solution(a, b) {
    var answer = 0;
    let result1 = String(a) + String(b)
    let result2 = 2 * a * b 

    if (Number(result1) > result2) {
      answer = Number(result1)
    } else {
       answer = result2
    }
    return answer;
    
}