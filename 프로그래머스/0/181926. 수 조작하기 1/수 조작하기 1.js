function solution(n, control) {
    var answer = 0;
    
    let controlArr = [...control]
    
    for (let i=0; i <controlArr.length; i++) {
        if (controlArr[i] === 'w') {
            n = n + 1
        } else if (controlArr[i] === 's') {
            n = n - 1
        } else if (controlArr[i] === 'd') {
            n = n + 10 
        } else if (controlArr[i] === 'a') {
            n = n - 10
            
        }
        answer = n 
    }
    
    return answer;
}


