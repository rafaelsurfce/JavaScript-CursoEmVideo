 /*var idade = 18;
if (idade < 16){

    console.log('Não Vota')

}
else {
    if ( idade >= 16 && idade < 18){
        console.log("Voto opcional");
    }

    else {
        console.log("Voto obrigatorio")
    }

}
*/

var idade = 79;

if (idade < 16){
    console.log("Não vota");
}

else if ( (idade >= 16 && idade < 18) || idade >= 75 ){
    console.log("Voto opcional");
}

else {
    console.log("Voto Obrigatorio");
}
