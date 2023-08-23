function contar(){
    var inicio = document.getElementById('iinicio')
    var final = document.getElementById('ifim')
    var passo = document.getElementById('ipassos')
   
    
    if (inicio.value.length === 0 || final.value.length === 0 || passo.value.length === 0) {
        window.alert(`Impossível realizar a contagem, favor preencha as lacunas!`)
} else {
    res.innerHTML = 'Contando:<br>'
    var i = Number(inicio.value)
    var f = Number(final.value)
    var p = Number(passo.value)
    if (p <= 0) {
        window.alert('Passo Inválido! Considerando Passo 1')
        p = 1
    }
    if (i < f) {
        for (var c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F449} ` 
        }
    } else { 
        for (var c = i; c >= f; c -= p) {
            res.innerHTML += ` ${c} \u{1F449} `
        }
    }
    res.innerHTML += `\u{1F3C1}`
}

}