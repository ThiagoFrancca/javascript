function verificadorNumero(n){
   
    if( n==0){
        return('É ZERO')
    }else{
        if( n>0){
            return('positivo, mané')
        }else{
        return('Negativo, mané')
         }
}
}
   
let numero= verificadorNumero(5)
console.log(numero)