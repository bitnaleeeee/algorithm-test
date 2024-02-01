function solution(n) {
    var answer = 0;
    for (i=1; i<=n; i++){

       if ( n % 2 === 0) {
         if ( i % 2 === 0) {
             console.log(i)        
         }

       } 
    
        else {
            if ( i % 2 === 1) {
                console.log(i)
            }
        }
        
        
    }
    return answer;
}