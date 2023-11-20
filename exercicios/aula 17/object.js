let amigo = {
    nome: 'Thiago',
    sexo: 'M',
    peso: 97.8,
  
    engordar(p = 0) {
      
      if (!isNaN(p)) {
        console.log('engordou');
        this.peso += p;
      } 
    }
  };
  
  amigo.engordar(5);
  console.log(`${amigo.nome} pesa ${amigo.peso} Kg`);
  