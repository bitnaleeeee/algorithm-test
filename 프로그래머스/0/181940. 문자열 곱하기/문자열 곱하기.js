function solution(my_string, k) {
    var answer = '';
    let input = [];
    for (i=0; i<k; i++) {
        input.splice(0, 0, my_string)
    }
    answer = input.join("")
    return answer;
}