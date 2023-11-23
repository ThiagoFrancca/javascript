function somaDosQuadrados(numero) {
    let soma = 0;
    for (let i = 1; i <= numero; i++) {
      soma += i * i;
    }
    return soma;
  }
  
  // Exemplo de uso:
  let resultado = somaDosQuadrados(3);
  console.log(resultado);