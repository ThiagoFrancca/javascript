function jogoDeDados(palpite){
        let dado1= Math.floor(Math.random() * 6) +1 // vai mandar números aleatórios
        let dado2= Math.floor(Math.random() * 6) +1

        let soma= dado1 + dado2

    console.log ("Dados lançados", dado1,"+", dado2)
    console.log("Dados somados", soma)
    console.log(`Seu palpite é ${palpiteuser}`)

    if(palpite === soma){
        return'Parabéns, você ganhou'
    }else{
        return "Perdeu, passa o dinheiro"
    }
}  

let palpiteuser= parseInt(6)// digite seu palpite
let resultado= jogoDeDados(palpiteuser)

console.log(resultado)