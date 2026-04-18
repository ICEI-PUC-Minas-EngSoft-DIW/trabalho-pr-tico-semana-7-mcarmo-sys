
function capturarNumeroValido(mensagem) {
    let entrada = prompt(mensagem);
    
    // Converte para número e verifica se é um valor válido
    while (isNaN(entrada) || entrada === "" || entrada === null) {
        entrada = prompt(" Entrada inválida! Por favor, digite um número.\n" + mensagem);
    }
    
    return Number(entrada);
}

// Coleta de dados iniciais
const nome = prompt("Bem-vindo! Qual é o seu nome?");
const rendaMensal = capturarNumeroValido("Informe sua renda mensal:");


let qtdDespesas = capturarNumeroValido("Quantas despesas você quer lançar? (Mínimo 1, Máximo 5):");

if (qtdDespesas < 1) {
    qtdDespesas = 1;
} else if (qtdDespesas > 5) {
    qtdDespesas = 5;
}

let totalDespesas = 0;

for (let i = 1; i <= qtdDespesas; i++) {
    let valor = capturarNumeroValido(`Digite o valor da despesa ${i} de ${qtdDespesas}:`);
    totalDespesas += valor;
}


let sobra = rendaMensal - totalDespesas;
let classificacao = "";

if (totalDespesas > rendaMensal) {
    classificacao = " Atenção: você gastou mais do que ganhou.";
} else {
    
    const margemSeguranca = rendaMensal * 0.30;
    
    if (sobra >= margemSeguranca) {
        classificacao = "Ótimo: boa margem de sobra.";
    } else {
        classificacao = " Ok: dá para melhorar a sobra.";
    }
}


const resultadoTexto = `
======================================
   RESULTADO DO ORÇAMENTO PESSOAL
======================================
Usuário: ${nome}
Renda Mensal: R$ ${rendaMensal.toFixed(2)}
Total de Despesas: R$ ${totalDespesas.toFixed(2)}
--------------------------------------
Sobra Final: R$ ${sobra.toFixed(2)}
Classificação: ${classificacao}
======================================
`;

// Exibição Alert e Console
alert(resultadoTexto);
console.log(resultadoTexto);