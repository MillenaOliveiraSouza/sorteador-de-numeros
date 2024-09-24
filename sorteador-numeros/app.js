function obterNumeroAleatorio(min, max){
    return parseInt(Math.random() * (max - min + 1)) + min; 

}

function sortear(){
    let sorteados = [];

    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let numero; 


    if( de >= ate){
        document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Campo "Do número" deve ser inferior ao campo "Até o número". Tente novamente!</label>';
        return alterarStatusBotao()
    }else if (ate - de <= quantidade) {
        document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Intervalo entre números deve ser superior à quantidade de números sorteados. Tente novamente!</label>';
        return alterarStatusBotao()
      }


   for (let i = 0; i < quantidade; i++){

    numero = obterNumeroAleatorio(de, ate);

    while(sorteados.includes(numero)){
        numero= obterNumeroAleatorio(de, ate);
    }

    sorteados.push(numero);

   }

   let texto = document.getElementById('resultado');
   texto.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;

   alterarStatusBotao();

}



function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');

    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar (){
   document.getElementById('quantidade').value= '';
   document.getElementById('de').value= '';
   document.getElementById('ate').value= '';
   document.getElementById('resultado').innerHTML= '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
   
   alterarStatusBotao();
}