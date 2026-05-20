function interpretarModulo(
    pergunta
) {

    const texto =
        pergunta.toLowerCase();

    // =====================
    // COMERCIAL
    // =====================

    if (

        texto.includes('vendeu') ||
        texto.includes('faturamento') ||
        texto.includes('produto') ||
        texto.includes('cliente') ||
        texto.includes('vendedor')

    ) {

        return 'comercial';

    }

    // =====================
    // PEDIDOS
    // =====================

    if (

        texto.includes('pedido') ||
        texto.includes('itens') ||
        texto.includes('comprador')

    ) {

        return 'pedido';

    }

    // =====================
    // FINANCEIRO
    // =====================

    if (

        texto.includes('inadimplente') ||
        texto.includes('quitado') ||
        texto.includes('vencido') ||
        texto.includes('financeiro')

    ) {

        return 'financeiro';

    }

    // =====================
    // INTERNET
    // =====================

    if (

        texto.includes('google') ||
        texto.includes('gasolina') ||
        texto.includes('notícia') ||
        texto.includes('internet')

    ) {

        return 'internet';

    }

    // =====================
    // DESCONHECIDO
    // =====================

    return 'desconhecido';

}

module.exports =
    interpretarModulo;
