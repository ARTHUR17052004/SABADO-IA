const consultarPedidosPorData =
require(
    './services/goevo/financeiro/consultarPedidosPorData'
);

// =========================
// MEMÓRIA GLOBAL
// =========================

const {

    salvarMemoria,
    buscarMemoria

} = require(
    './core/memoriaGlobal'
);

// =========================
// DATA GLOBAL
// =========================

const interpretarData =
require(
    './core/interpretadorData'
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
    // SALVA CONTEXTO
    // =====================

    salvarMemoria(
        'ultimaPergunta',
        pergunta
    );

    salvarMemoria(
        'ultimoModulo',
        'financeiro'
    );

    // =====================
    // INTERPRETA DATA
    // =====================

    const dataInterpretada =

        interpretarData(
            pergunta
        );

    // =====================
    // EXTRAI DATAS
    // =====================

    let datasEncontradas =

        pergunta.match(
            /\d{2}\/\d{2}\/\d{4}/g
        );

    // =====================
    // DATA GLOBAL
    // =====================

    if (

        (!datasEncontradas ||

        datasEncontradas.length === 0)

        &&

        dataInterpretada

    ) {

        datasEncontradas = [
            dataInterpretada
        ];

    }

    // =====================
    // MEMÓRIA GLOBAL
    // =====================

    if (

        (!datasEncontradas ||

        datasEncontradas.length === 0)

        &&

        buscarMemoria(
            'ultimaData'
        )

    ) {

        datasEncontradas = [

            buscarMemoria(
                'ultimaData'
            )

        ];

    }

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
    // SALVA DATA
    // =====================

    salvarMemoria(
        'ultimaData',
        datasEncontradas[0]
    );

    // =====================
    // TOTAIS
    // =====================

    let totalPedidos = 0;

    let totalComprado = 0;

    let respostaDetalhada = '';

    // =====================
    // PROCESSA DATAS
    // =====================

    for (

        const data of
        datasEncontradas

    ) {

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

    const respostaFinal = `

📊 COMPRAS

${respostaDetalhada}

======================

🧾 TOTAL GERAL:
${totalPedidos} pedidos

💰 TOTAL COMPRADO:
R$ ${totalComprado.toFixed(2)}

`;

    // =====================
    // SALVA RESPOSTA
    // =====================

    salvarMemoria(
        'ultimaResposta',
        respostaFinal
    );

    // =====================
    // FINAL
    // =====================

    console.log(
        respostaFinal
    );

}

// =========================
// START
// =========================

executar();