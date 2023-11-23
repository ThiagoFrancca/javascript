function anoBissexto(a){
    if((a%4===0 && a % 100 !==0) || a%400 ===0){
        return('Ano bissexto')
    }else{
        return('Ano normal')
    }
}
let ano= anoBissexto(2024)
console.log(ano)