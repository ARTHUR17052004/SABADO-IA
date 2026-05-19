const consultarPedidosPorData =
require(
    './services/goevo/financeiro/consultarPedidosPorData'
);

// =========================
// EXECUTAR
// =========================

async function executar() {

    // =====================
    // PERGUNTA
    // =====================

    const pergunta =
        process.argv[2];

    // =====================
    // VALIDA
    // =====================

    if (!pergunta) {

        console.log(
            'Pergunta não enviada.'
        );

        return;

    }

    // =====================
    // EXTRAI DATAS
    // =====================

    const datasEncontradas =

        pergunta.match(
            /\d{2}\/\d{2}\/\d{4}/g
        );

    // =====================
    // SEM DATA
    // =====================

    if (

        !datasEncontradas ||

        datasEncontradas.length === 0

    ) {

        console.log(
            'Informe uma data.'
        );

        return;

    }

    // =====================
    // TOTAIS
    // =====================

    let totalPedidos = 0;

    let totalComprado = 0;

    let respostaDetalhada = '';

    // =====================
    // PROCESSA DATAS
    // =====================

    for (const data of datasEncontradas) {

        const resultado =

            await consultarPedidosPorData(
                data
            );

        // =================
        // SEM RESULTADO
        // =================

        if (!resultado) {

            continue;

        }

        // =================
        // SOMA
        // =================

        totalPedidos +=
            resultado.totalPedidos;

        totalComprado +=
            resultado.totalComprado;

        // =================
        // BLOCO RESPOSTA
        // =================

        respostaDetalhada += `

📅 ${data}

🧾 Pedidos:
${resultado.totalPedidos}

💰 Total:
R$ ${resultado.totalComprado.toFixed(2)}
`;

        // =================
        // LISTA PEDIDOS
        // =================

        if (

            resultado.pedidos &&

            resultado.pedidos.length > 0

        ) {

            respostaDetalhada += `

📦 Pedidos encontrados:

`;

            resultado.pedidos.forEach(

                (pedido) => {

                    respostaDetalhada +=
`
- ${pedido.numero}
`;

                }

            );

        }

        respostaDetalhada += '\n';

    }

    // =====================
    // RESPOSTA FINAL
    // =====================

    console.log(`

📊 COMPRAS

${respostaDetalhada}

======================

🧾 TOTAL GERAL:
${totalPedidos} pedidos

💰 TOTAL COMPRADO:
R$ ${totalComprado.toFixed(2)}

`);

}

// =========================
// START
// =========================

executar();