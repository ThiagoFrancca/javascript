function calcIdade(i){
    if(i<=10){
        return ('Criança')
    }else{
        }if(i<=17) {
            return ('Adolescente')
        }else if (i>=18 && i<=60)
            return ('Adulto')
        else{
            return ('Idoso')
        }
        }

    
    let idade= calcIdade(61)
    console.log(idade)