function trocarCasas(str){
    let resultado =""

    for( let i= 0; i< str.length; i++){
        let proximoIndice = (i + 1) % str.length; 
        resultado += str[proximoIndice];
    }
    return resultado;
}
let res= trocarCasas('Hello Word, my name is Thiago')
console.log(res)