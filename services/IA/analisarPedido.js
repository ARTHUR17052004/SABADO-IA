function analisarPedido(
    pergunta,
    pedido
) {

    // =========================
    // VALIDA
    // =========================

    if (!pedido) {

        return null;

    }

    const texto =
        pergunta.toLowerCase();

    // =========================
    // VALOR
    // =========================

    const valor =

        Number(

            String(
                pedido.valor || 0
            )

                .replace(/[^\d,]/g, '')
                .replace('.', '')
                .replace(',', '.')

        );

    // =========================
    // QUANTIDADE
    // =========================

    const quantidade =

        Number(
            pedido.quantidade || 0
        );

    // =========================
    // PEDIDO CARO
    // =========================

    if (

        texto.includes('caro') ||

        texto.includes('alto valor')

    ) {

        if (valor > 50000) {

            return `

💰 Esse pedido possui valor elevado.

Valor:
${pedido.valor}

⚠️ Considerado um pedido de alto impacto financeiro.

`;

        }

        return `

💰 Esse pedido possui valor moderado.

Valor:
${pedido.valor}

`;

    }

    // =========================
    // PEDIDO GRANDE
    // =========================

    if (

        texto.includes('grande') ||

        texto.includes('muito item')

    ) {

        if (quantidade > 1000) {

            return `

📦 Esse pedido possui grande volume.

Quantidade:
${pedido.quantidade}

⚠️ Considerado pedido de grande porte.

`;

        }

        return `

📦 Esse pedido possui volume moderado.

Quantidade:
${pedido.quantidade}

`;

    }

    // =========================
    // SEM ANÁLISE
    // =========================

    return null;

}

module.exports =
    analisarPedido;