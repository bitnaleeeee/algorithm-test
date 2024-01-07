function solution(num_list) {
    num_list.sort(function (a, b) {
        return a - b;
    });

    let answer = num_list.slice(0, 5);

    return answer;
}


