function calcular (tipo, valor){
    console.log(tipo, valor)

    if(tipo === 'acao'){

        if(valor === 'c'){
            //limpar o visor
            document.getElementById('resultado').value = ''
        }
        
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.' ){
            document.getElementById('resultado').value += valor
        }

        if(valor === '='){
            //Recuperando o resultado , processando usando eval e atributindo ao valor_campo
            let valor_campo = eval ( document.getElementById('resultado').value)

            //Sobrepondo
            document.getElementById('resultado').value = valor_campo
        }

    } else if(tipo === 'valor'){

        /*
         recuperando o valor atual do campo 
         var valor_campo =  document.getElementById('resultado').value .
         Em vez de usar o trecho de código acima basta adicionar , no trecho abaixo  += no valor 
        */

        //selecionando o objeto e acessando o atributo value
        document.getElementById('resultado').value += valor 
    }
}