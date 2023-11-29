function somaDosQuadrados(numero) {
  // Inicializa uma variável para armazenar a soma dos quadrados
  let soma = 0;

  // Itera de 1 até o número fornecido
  for (let i = 1; i <= numero; i++) {
    // Para cada número, adiciona o quadrado ao total
    soma += i * i;
  }

  // Retorna o resultado da soma dos quadrados
  return soma;
}

// Exemplo de uso:
let resultado = somaDosQuadrados(10);
console.log(resultado);
