function solution(n) {
    var answer = 0;

    for (i=1; i<=n; i++) {
       if ( n % 2 === 0 && i) {
         if ( i % 2 === 0) {
             answer += (i ** 2)
         }
       } 
    
        else {
            if ( i % 2 === 1) {
            answer += i        
            }            
        }       
    }
    return answer;
}