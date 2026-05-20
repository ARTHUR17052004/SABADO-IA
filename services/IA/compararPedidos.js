const buscarPedido =
    require('../goevo/pedido');

// =========================
// COMPARAR PEDIDOS
// =========================

async function compararPedidos(

    pedido1,
    pedido2

) {

    // =====================
    // CONSULTA
    // =====================

    const dadosPedido1 =

        await buscarPedido(
            pedido1
        );

    const dadosPedido2 =

        await buscarPedido(
            pedido2
        );

    // =====================
    // VALIDA
    // =====================

    if (

        !dadosPedido1 ||

        !dadosPedido2

    ) {

        return `
Não consegui comparar os pedidos.
`;

    }

    // =====================
    // RESPOSTA
    // =====================

    return `

📊 COMPARAÇÃO DE PEDIDOS

📦 Pedido:
${pedido1}

💰 Valor:
${dadosPedido1.valor}

🏢 Fornecedor:
${dadosPedido1.fornecedor}

======================

📦 Pedido:
${pedido2}

💰 Valor:
${dadosPedido2.valor}

🏢 Fornecedor:
${dadosPedido2.fornecedor}

`;

}

module.exports =
    compararPedidos;