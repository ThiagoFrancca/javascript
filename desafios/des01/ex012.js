
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas` 
    img
    if( hora >= 0 && hora <= 12){
        msg.innerHTML = `Agora são ${hora} horas, ` +  
        `Bom Dia!`
        img.src = 'manha1.png'
        img.style.width = '250px';
        img.style.marginLeft = '117px';
        document.body.style.backgroundColor = 'rgb(109, 170, 240)';

    }else if(hora >= 12 && hora <= 18){
        msg.innerHTML = `Agora são ${hora} horas, ` +  
        `Boa Tarde!`
        img.src = 'tarde.png'
        img.style.width = '479px';
        document.body.style.backgroundColor = 'rgb(238, 141, 63)';
    }
    else{
        msg.innerHTML = `Agora são ${hora} horas, ` +  
        `Boa Noite!`
        img.src ='noite.png'
        img.style.width = '295px';
        img.style.marginLeft = '97px';
        document.body.style.backgroundColor = 'rgba(29, 28, 28, 0.808)';
    }
}