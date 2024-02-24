function solution(num_list) {
    var answer = [];

    let num_list_last = (num_list[num_list.length - 1])
    let num_list_pre = (num_list[num_list.length - 2])
    

    if (num_list_last > num_list_pre) {
        let result = num_list_last - num_list_pre
        num_list.push(result)
        answer = num_list
    } else {
        let result = num_list_last * 2
        num_list.push(result)
        answer = num_list
    }
    
    

    return answer;
}