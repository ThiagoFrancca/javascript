let num= [5,8,4,27,43,234,2]
//Cuidado, ele ler primeiro o primeiro número do valor, aperte f8 que vai entender do que estou falando.

/*console.log(`Nosso vetor são o ${num}`)
console.log(`O vetor da casa 5 é ${num[5]}`)
console.log(`Temos ${num.length} vetores`)
console.log(`O primeiro vetor é ${num[0]}`)*/

let posicao= num.indexOf(4)
if(posicao == -1){
    console.log('O número não foi declarado')
}else{
console.log(`O valor 4 está na posição ${posicao}`)}