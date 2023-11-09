function carregar(){

    var agora= new Date()
    var hora= agora.getHours()
    var msg = document.getElementById('msg')
    var img= document.getElementById('imagem')
    msg.innerHTML= `Agora são ${hora} horas`
    img
    if( hora >=0 && hora< 12){
        //bom dia
        img.src ='manha1.png'
       
    } else if(hora >= 12 && hora <=18){
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background= "red"
    }else{
        //boa noite
        img.src ='noite.png'
        document.body.style.background= "black"
    }
}