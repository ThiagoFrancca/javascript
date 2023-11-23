function calcIMC(peso,altura){
    let imc= peso/ (altura*altura)

if( imc<18.5){
    return"Abaixo do peso."
}else if(imc<24.9){
    return "peso normal."
}else if(imc<29.9){
    return "Sobrepeso."
}else if(imc<34.9){
    return "Obesidade grau 1."
}else if(imc<39.9){
    return "Obesidade grau 2."
}else{
    "Obesidade grau 3."
}
}
// Solicita ao usuário que insira seu peso e altura.
let pesoUse= (91);// adicione seu peso
let altura= (1.90);// preencha a altura com . e não vírgula

let resultadIMC= calcIMC(parseFloat(pesoUse), parseFloat(altura))

console.log(resultadIMC)