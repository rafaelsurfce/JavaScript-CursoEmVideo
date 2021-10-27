var num = [5,8,2,9,3]; // declarando um vetor;
console.log(`Conteudo do vetor: ${num}`);


num[5]= 6; //modifica o conteudo de uma determinado espaço do vetor, ou cria o espaço e armazena o conteudo
num.push(10); // adiciona o conteudo ao final do array


console.log(`Vetor com elementos modificados e acrescentados: ${num}`);
console.log(`O tamanho do vetor é: ${num.length}`); //imprime o comprimento do vetor
//console.log(`Vetor organizado de forma crescente: ${num.sort()}`); // imprime o vetor com o seu conteudo na forma crescente

// imprimindo o elemento de cada vetor com FOR tradicional
/*for (var c = 0; c < num.length; c++){
    console.log(`O valor do elemento ${c} é igual a ${num[c]}`);
}*/

// for para vetores e objetos

for (var c in num){
    console.log(`A posição ${c} tem como valor ${num[c]}`);


}

console.log(`O valor escolhido está na posição ${num.indexOf(10)}`);// pesquisa o indice de um determinado valor 

