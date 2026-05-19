function raciocinarItens(
    pergunta,
    itens
) {

    const texto =
        pergunta.toLowerCase();

    // =========================
    // ITEM MAIS CARO
    // =========================

    if (

        texto.includes('mais caro') ||

        texto.includes('maior valor')

    ) {

        let maior =
            itens[0];

        for (const item of itens) {

            if (

                Number(item.total) >

                Number(maior.total)

            ) {

                maior = item;

            }

        }

        return `
💰 Item de maior valor:

📦 Produto:
${maior.descricao}

💵 Total:
R$ ${maior.total}

📊 Quantidade:
${maior.quantidade}
`;

    }

    // =========================
    // MAIOR QUANTIDADE
    // =========================

    if (

        texto.includes('maior quantidade') ||

        texto.includes('mais quantidade')

    ) {

        let maior =
            itens[0];

        for (const item of itens) {

            if (

                Number(item.quantidade) >

                Number(maior.quantidade)

            ) {

                maior = item;

            }

        }

        return `
📦 Item com maior quantidade:

Produto:
${maior.descricao}

Quantidade:
${maior.quantidade}
`;

    }
// =========================
// RESUMO EXECUTIVO
// =========================

if (

    texto.includes('resumo') ||

    texto.includes('resume') ||

    texto.includes('resumir')

) {

    let totalPedido = 0;

    let totalQuantidade = 0;

    let maior = itens[0];

    for (const item of itens) {

        totalPedido +=
            Number(item.total);

        totalQuantidade +=
            Number(item.quantidade);

        if (

            Number(item.total) >

            Number(maior.total)

        ) {

            maior = item;

        }

    }

    return `
📦 Resumo Executivo do Pedido

🏢 Fornecedor:
${itens[0]?.fornecedor}

📦 Total de Itens:
${itens.length}

💰 Valor Total:
R$ ${totalPedido.toFixed(2)}

📊 Quantidade Total:
${totalQuantidade}

🔥 Item de Maior Valor:
${maior.descricao}

💵 Valor:
R$ ${maior.total}
`;

}
    return null;

}

module.exports =
    raciocinarItens;