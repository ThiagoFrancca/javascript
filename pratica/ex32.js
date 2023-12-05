function calcularMediaPonderada(nota1, peso1, nota2, peso2, nota3, peso3) {
    let somaNotas = nota1 * peso1 + nota2 * peso2 + nota3 * peso3;
    let somaPesos = peso1 + peso2 + peso3;
  
    return somaNotas / somaPesos;
  }
  
  // Exemplo de uso:
  let resultadoMediaPonderada = calcularMediaPonderada(10, 3, 7, 4, 9, 3);
  console.log(resultadoMediaPonderada);  // Saída esperada: 7.625
  