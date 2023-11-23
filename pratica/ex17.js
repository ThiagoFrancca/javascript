function validadarSenha(senha){
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return regex.test(senha);
}
let senhaValida= validadarSenha("Senha")
console.log("Senha válida?", senhaValida)