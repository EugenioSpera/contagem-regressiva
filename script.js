function listaNumeros() {
    //cria referencia aos elemntos da pagia
    let inNumero = document.getElementById('inNumero');
    let outResposta = document.getElementById('outResposta');
    
    //converte conteudo do campo inNUmero
    let numero = Number(inNumero.value);
 
    //verifica a validade do número,

    if (numero == 0 || isNaN(numero)) {
        alert("Informe um número válido...");
        inNumero.focus();
        inNumero.value = ""
    }
        
    //cria uma variável do tipo String, que irá concatenar a resposta
    let resposta = " ";

    for (let i = numero; i >= 0; i = i -10) { 
        resposta = resposta + i + " ";
        

    }

    //altera o conteudo de ouResposta
    outResposta.textContent = resposta + "Acabou!" 
}

    //referencia elento após associa function ao evento click
    let btDecrescer = document.getElementById("btDecrescer");
    btDecrescer.addEventListener("click", listaNumeros);