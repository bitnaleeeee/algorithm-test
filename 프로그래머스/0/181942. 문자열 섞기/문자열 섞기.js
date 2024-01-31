function solution(str1, str2) {
    var answer = '';
    let input = []

    for (i=0; i<str1.length; i++) {
       input.push(...str1[i],...str2[i])
}
    answer = input.join("");
    return answer
}

