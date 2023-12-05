function contarVogais(str){
    const vogais= 'aeiouAEIOU'
    let contador= 0

    for(let v= 0; v < str.length; v++){

        if (vogais.includes(str[v])) {
            contador++;
          }
        }
      
        return contador;
      }
      let resultadoContagemVogais = contarVogais("Hello World, my name is Thiago França, estou exercitando as praticas de java script, esse exercicio conta quantas vogais tem na frase, isto pode ser util no futuro.");
console.log(resultadoContagemVogais);  // Saída esperada: 3