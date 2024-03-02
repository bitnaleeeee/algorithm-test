function solution(num_list) {
    var sum1 = 1, sum2 = 0;
    for(var i of num_list){
        sum1 *= i;
        sum2 += i;
    }
    return sum1 > sum2**2 ? 0 : 1;
}
