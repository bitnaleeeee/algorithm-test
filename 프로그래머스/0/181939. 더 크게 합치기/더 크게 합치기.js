function solution(a, b) {
    var answer = 0;

    let num1 = String(a) + String(b)
    let num2 = String(b) + String(a)

    if (Number(num1) > Number(num2)) {
       answer = Number(num1)
    } else {
       answer = Number(num2)
    }


    return answer;
}