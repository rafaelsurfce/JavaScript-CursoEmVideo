let amigo = {nome: 'Rafael', sexo: 'm', peso: 62, engordar(p=0){
    console.log("Engordou");
    this.peso += p; 
}};

amigo.engordar(3);
console.log(amigo.peso);