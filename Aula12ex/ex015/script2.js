function verificar() {
    var data = new Date(); // inicializando a classe DATA
    var ano = data.getFullYear();
    var fano = window.document.getElementById('txtano');
    var sexo = window.document.getElementsByName('radiosexo');
    var resultado = window.document.querySelector('div#result');
    var img = document.createElement('img'); // Criando elemento de forma dinamica
    var idade = ano - Number(fano.value);
    genero = '';
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("ERRO!!! Dados preenchidos de forma incorreta");
    }
    else {
    if (sexo[0].checked){
        genero = "homem";
        if (idade >=0 && idade < 10 ) {
            // crianca
            img.setAttribute('src', 'bebehomem.png'); // alterando o id e colocando a imagem
        }
        else if( idade < 21) {
            //jovem
            img.setAttribute('src', 'jovemhomem.png');
        }
        else if (idade < 60){
            // adulto
            img.setAttribute('src', 'adultohomem.png');
        }
        else {
            //idoso
            img.setAttribute('src', 'idosohomem.png');
        }
        
    }
    else if (sexo[1].checked) {
        genero = 'mulher'
        if (idade >=0 && idade < 10 ) {
            //crianca
            img.setAttribute('src', 'bebemulher.png');
        }
        else if( idade < 21) {
            //jovem
            img.setAttribute('src', 'jovemmulher.png');
        }
        else if (idade < 60){
            // adulto
            img.setAttribute('src', 'adultomulher.png');
        }
        else {
            //idoso
            img.setAttribute('src', 'idosomulher.png');
        }
        
        
    }
    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    resultado.appendChild(img);
    }
}