function contar() {

    var inicio = window.document.getElementById('txtinicio');
    var pulo = window.document.getElementById('txtpasso');
    var fim = window.document.getElementById('txtfim');
    var resultado = window.document.getElementById('result');
    

    var primeiro = Number(inicio.value);
    var passo = Number(pulo.value);
    var final = Number(fim.value);

    if (passo <= 0){
        window.alert("Passo invalido! Considerando PASSO 1");
        passo = 1;
    }

    
    if (inicio.value.length == 0 || fim.value.length == 0){
        window.alert("[ERRO] Faltam Dados! ");
        resultado.innerHTML =`Impossivel  contar`;

    }
    else if ( primeiro < final) {
        resultado.innerHTML = `Contando: `;
        for (var c = primeiro; c <=final; c+= passo) {
        resultado.innerHTML += `${c} \u{1F449} `
        }
        

    }
    else {
        resultado.innerHTML = `Contando: `;
        for (var c = primeiro; c >= final; c-= passo) {
            resultado.innerHTML += `${c} \u{1F449} `
        }
    }
    resultado.innerHTML += ` \u{1F3C1}`;


}