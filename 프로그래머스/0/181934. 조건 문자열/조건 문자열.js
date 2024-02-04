function solution(ineq, eq, n, m) {
    var answer = 0;
    
    if (ineq == '>' && eq == '=') {
       answer = (n>=m)
    }  else if (ineq == '<' && eq == '=') {
        answer = (n<=m)
    } else if (ineq =='>' && eq =='!') {
       answer = (n > m)
    } else if (ineq =='<' && eq =='!') {
       answer = (n<m)
    }
    answer === true ? answer = 1 : answer = 0;
    return answer;
}