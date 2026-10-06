const valorReal = document.querySelector("input"); // pega o input da página
const resultado = document.querySelector("#resultado"); // pega o parágrafo vazio pelo id (o # significa id)
const cotacao = 5.23; // guarda a cotação do dólar numa variável (ponto, não vírgula)


// função chamada quando clica no botão
function converter() {

    if (valorReal.value === "") {   // se o campo estiver vazio (=== compara valor e tipo)
        resultado.textContent = "Digite um valor em reais (R$) para converter!";
        return; // return para a função aqui e não executa o resto 
    }


    const valorConvertido = (valorReal.value / cotacao).toFixed(2); // divide o valor em reais pela cotação e limita a 2 casas decimais

    resultado.textContent = `R$ ${valorReal.value} equivalem a US$ ${valorConvertido}`; // escreve o texto dentro do parágrafo (no lugar do alert)

    valorReal.value = ""; // limpa o campo do input(quando o valor já foi colcado)
}


// função chamada quando clica no botão limpar
function limpar() {
    resultado.textContent = "";  // apaga o texto do parágrafo de resultados
}