function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique se os dados estão corretos e tente novamente.')
        
    }else{
    var rsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img') 
    img.setAttribute('id','foto')
    if (rsex[0].checked){
        genero= 'Homem'
    
    }else if(idade> 0  && idade <12){
        genero = 'Homem'
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'img/criança-M.png')
        } else if (idade < 21) {
            img.setAttribute('src', 'img/adolescente-M.png')
        } else if (idade < 50) {
            img.setAttribute('src', 'assets/img/adulto-M.png')
        } else {
            img.setAttribute('src', 'assets/img/idoso-M.png')
        }
    }
}
    if(rsex[1].checked){
        genero= 'Mulher'
    }
    

    
   
    res.style.textAlign= 'center'
    
    res.innerHTML= `Detectamos ${genero} de ${idade} anos.`
    res.appendChild(img)
}