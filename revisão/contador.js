function contar(){
var inicio= document.getElementById('iinicio')
var fim= document.getElementById('ifim')
var passo= document.getElementById('ipasso')
var res= document.getElementById('res')

if(inicio.value== 0 || fim.value== 0 || passo.value===0){
    alert('[ERRO] FALTA DADOS!')
    res.innerHTML= 'Impossivel contar'
}else{
    let i= Number (inicio.value)
    let f= Number (fim.value)
    let p= Number (passo.value)

    if (p<=0){
        alert('Passo inválido, considerar o número 1')
        p=1
    }
if (i< f){
    //Contagem crescente
    for( let c= i; c<=f; c +=p){
        res.innerHTML+=` ${c}`
        }
    }else{
            //Contagem decrescente

        for (let c=i; c>=f; c-=p){
        res.innerHTML += `${c}`
    }
}
}
}
