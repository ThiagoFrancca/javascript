
// fatorial de 5
//5*4*3*2*1

function fatorar(n){
    let fat=1
    for( let c= n; c>1; c--){
        fat*= c
    }

    return fat
}
console.log (fatorar(7))