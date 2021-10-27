function tabuada() { 
    let numero = window.document.getElementById('txtnumero');
    let tabuada = window.document.getElementById('txttabuada');
    let num = Number(numero.value);
    tabuada.innerHTML = '';
    if (numero.value.length == 0){
        window.alert('[ERRO!] DIGITE UM NUMERO');
    }
    else {
        for (c = 1; c <=10; c++){
            let item = document.createElement("option");
            item.text = `${num} x ${c} = ${num * c}`;
            tabuada.appendChild(item);
            item.value = `tabuada${c}`;

        }
    }

}