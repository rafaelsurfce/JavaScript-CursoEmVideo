var vetor = [];
var painel = window.document.getElementById("painel");
var resultado = window.document.getElementById("result");

function adicionar() {
    var numero = window.document.getElementById("txtnumero");
    var num = Number(numero.value);
    var consult = Number(vetor.indexOf(num));
    

    if ((vetor[consult] == numero.value) || (numero.value.length == 0) || (num < 1 || num > 100)){
        window.alert("Valor invalido ou já encontrado na lista");

    }
    else {
        resultado.innerHTML = ``;
        vetor.push(num);
        let item = document.createElement("option");
        item.text = `Valor ${num} Adicionado.`;
        painel.appendChild(item);
        item.value = `painel${num}`
    }
    numero.value = "";
    numero.focus();
}

function finalizar (){
    if (vetor.length == 0){

        window.alert("Adicione valores antes de finalizar");

    }
    else {
        var soma = 0;
        var maior = vetor[0];
        var menor = vetor[0];
        var media = 0; // declarando variavél sem atribuir valor 


        for (c in vetor){
            soma += vetor[c];

            if (vetor[c] > maior){
                maior = vetor[c];
            }
            if ( vetor[c] < menor){
                menor = vetor[c];
            }
        }
        media = soma / vetor.length

        resultado.innerHTML += `<p> Ao todo, temos ${vetor.length} numeros cadastrados.</p>`;
        resultado.innerHTML += `<p> maior valor informado foi ${maior}.</p>`;
        resultado.innerHTML += `<p> menor valor informado foi ${menor}.</p>`;
        resultado.innerHTML += `<p> Somando todos os valores, o total foi: ${soma}</p>`;
        resultado.innerHTML += `<p> A media dos valores digitados é: ${media}</p>`;
        

    
        
}

}
