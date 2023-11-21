function fatorar(j){
    let fat= 1

    for(let n= j; j> 1; n--){
        fat *= n
    }
    return fat
}
console.log(fatorar(5))