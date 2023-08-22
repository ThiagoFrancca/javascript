function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique se os dados estão corretos e tente novamente!')
        
    }else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img') 
    img.setAttribute('id','foto')
    if (fsex[0].checked){
        gênero= 'homem'
    
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'img/criança-M.png')
        } else if (idade < 21) {
            img.setAttribute('src', 'img/adolescente-M.png')
        } else if (idade < 60) {
            img.setAttribute('src', 'img/adulto-M.png')
        } else {
            img.setAttribute('src', 'img/idoso-M.png')
        }
    }

    if(fsex[1].checked){
        gênero= 'mulher'
        
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'img/criança-F.png')
        } else if (idade < 21) {
            img.setAttribute('src', 'img/adolescente-F.png')
        } else if (idade < 60) {
            img.setAttribute('src', 'img/adulto-F.png')
        } else {
            img.setAttribute('src', 'img/idoso-F.png')
        }
    }
    
}
    
    
    res.innerHTML= `Detectamos ${gênero} de ${idade} anos.`
    res.style.textAlign= 'center'
    res.appendChild(img)
}