function inverterString(str) {
    let resultado = "";
    for (let i = str.length - 1; i >= 0; i--) {
      resultado += str[i];
    }
    return resultado;
  }

//-----------------------------------------------------------


function ehPalindromo(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let inverso = inverterString(str);  // Corrigido para chamar a função inverterString
    return str === inverso;
  }
  
  // Exemplo de uso:
  let resultadoPalindromo = ehPalindromo("A man, a plan, a canal, Panama");
  console.log(resultadoPalindromo);
  