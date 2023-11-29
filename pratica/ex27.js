function inverterString(str) {
    // Inicializa uma variável para armazenar o resultado
    let resultado = "";
  
    // Itera de trás para frente através da string
    for (let i = str.length - 1; i >= 0; i--) {
      // Adiciona cada caractere à variável resultado
      resultado += str[i];
    }
  
    // Retorna a string invertida
    return resultado;
  }
  
  // Exemplo de uso:
  let inverso = inverterString("hello");
  console.log(inverso);
  
// ISSO INVERTE O CONTEÚDO DA STRING
