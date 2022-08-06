function fibonacci(n){
    if (n === 1) return [1];
    if (n === 2) return [1, 1]
    let list = [1, 1]
    for (let i = 2; i < n; i++) {
        list.push(list[i - 1] + list[i - 2])
    }
    return list 
}


console.log(fibonacci(5))