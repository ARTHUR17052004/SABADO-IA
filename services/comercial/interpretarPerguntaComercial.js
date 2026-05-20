function interpretarPerguntaComercial(
    pergunta
) {

    const texto =
        pergunta.toLowerCase();

    // =========================
    // PRODUTO MAIS VENDIDO
    // =========================

    if (

        texto.includes('produto mais vendido') ||

        texto.includes('mais vendido') ||

        texto.includes('produto campeão')

    ) {

        return 'PRODUTO_MAIS_VENDIDO';

    }

    // =========================
    // TODOS PRODUTOS
    // =========================

    if (

        texto.includes('todos produtos') ||

        texto.includes('todos os produtos') ||

        texto.includes('produtos vendidos')

    ) {

        return 'TODOS_PRODUTOS';

    }

    // =========================
    // MELHOR VENDEDOR
    // =========================

    if (

        texto.includes('melhor vendedor') ||

        texto.includes('quem vendeu mais') ||

        texto.includes('maior vendedor') ||

        texto.includes('campeão de vendas')

    ) {

        return 'MELHOR_VENDEDOR';

    }

    // =========================
    // TODOS VENDEDORES
    // =========================

    if (

        texto.includes('todos vendedores') ||

        texto.includes('todos os vendedores') ||

        texto.includes('vendas por vendedor')

    ) {

        return 'TODOS_VENDEDORES';

    }

    // =========================
    // CLIENTES
    // =========================

    if (

        texto.includes('clientes') ||

        texto.includes('top clientes') ||

        texto.includes('quem comprou mais')

    ) {

        return 'CLIENTES';

    }

    // =========================
    // FATURAMENTO
    // =========================

    if (

        texto.includes('faturamento') ||

        texto.includes('quanto vendeu') ||

        texto.includes('quanto vendemos') ||

        texto.includes('lucro') ||

        texto.includes('valor vendido')

    ) {

        return 'FATURAMENTO';

    }

    // =========================
    // PADRÃO
    // =========================

    return 'RESUMO';

}

module.exports =
    interpretarPerguntaComercial;