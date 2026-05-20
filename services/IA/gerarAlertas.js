const metricas =
    require('../../core/metricas.js');

function gerarAlertas(
    pedido
) {

    // =========================
    // VALIDA
    // =========================

    if (!pedido) {

        return null;

    }

    const alertas = [];

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
    // PEDIDO ALTO
    // =========================

    if (valor > 50000) {

        alertas.push(
            '⚠️ Pedido com alto valor financeiro.'
        );

    }

    // =========================
    // GRANDE VOLUME
    // =========================

    if (quantidade > 1000) {

        alertas.push(
            '📦 Pedido com grande volume.'
        );

    }

    // =========================
    // CONSULTA RECORRENTE
    // =========================

    const vezesConsultadas =

        metricas.pedidosConsultados[
            pedido.numero
        ] || 0;

    if (vezesConsultadas >= 3) {

        alertas.push(
            '🔁 Pedido muito consultado recentemente.'
        );

    }

    // =========================
    // SEM ALERTAS
    // =========================

    if (alertas.length === 0) {

        return null;

    }

    // =========================
    // RESPOSTA
    // =========================

    return `

🚨 ALERTAS OPERACIONAIS

${alertas.join('\n')}

`;

}

module.exports =
    gerarAlertas;