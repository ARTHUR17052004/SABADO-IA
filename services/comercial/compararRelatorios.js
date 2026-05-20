function converterValor(
    valor
) {

    return Number(

        valor
            .replace(' mil', '')
            .replace(/\./g, '')
            .replace(',', '.')

    );

}

function compararRelatorios(
    relatorio1,
    relatorio2
) {

    const valor1 =
        converterValor(
            relatorio1.faturamento
        );

    const valor2 =
        converterValor(
            relatorio2.faturamento
        );

    const diferenca =
        valor2 - valor1;

    let melhorDia =
        relatorio1.data;

    if (valor2 > valor1) {

        melhorDia =
            relatorio2.data;

    }

    return `

📊 COMPARAÇÃO DE FATURAMENTO

📅 ${relatorio1.data}
💰 ${relatorio1.faturamento}

📅 ${relatorio2.data}
💰 ${relatorio2.faturamento}

📈 Diferença:
${diferenca.toFixed(2)} mil

🏆 Melhor dia:
${melhorDia}

`;

}

module.exports =
    compararRelatorios;